import { spawn, execFileSync } from "node:child_process";
import path from "node:path";
import { createSiteServer, root } from "./serve-pages.mjs";

const children = new Set();
const server = createSiteServer({ programsOnly: true });
let stopping = false;

function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of children) {
    if (process.platform === "win32") {
      try { execFileSync("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore", windowsHide: true }); }
      catch { /* The child may have already exited. */ }
    } else child.kill("SIGTERM");
  }
  server.close();
  process.exit(code);
}

function launch(site, executable, args, env = process.env) {
  const child = spawn(process.execPath, [path.join(root, site, executable), ...args], {
    cwd: path.join(root, site), stdio: "inherit", env, windowsHide: true,
  });
  children.add(child);
  child.on("error", (error) => { console.error(error.message); stop(1); });
  child.on("exit", () => children.delete(child));
  return child;
}

process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());

try {
  // Compile styles before serving pages, then watch for subsequent edits.
  for (const site of ["micromouse-webpages", "ops-webpages"]) {
    await new Promise((resolve, reject) => {
      const child = launch(site, "node_modules/sass/sass.js", ["scss/custom.scss", "css/custom.css"]);
      child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`${site}: Sass compilation failed`)));
    });
    const watcher = launch(site, "node_modules/sass/sass.js", ["--watch", "scss/custom.scss:css/custom.css"]);
    watcher.on("exit", (code) => { if (!stopping) stop(code || 1); });
  }
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  server.on("error", (error) => { console.error(error.message); stop(1); });
  const port = process.env.PORT || "3000";
  const next = launch("IEEE-Website", "node_modules/next/dist/bin/next", ["dev", "--port", port], {
    ...process.env,
    IEEE_PROGRAM_ORIGIN: `http://127.0.0.1:${server.address().port}`,
  });
  next.on("exit", (code) => stop(code || 0));
  console.log(`All three sites: http://localhost:${port}/ (Ctrl+C to stop)`);
} catch (error) {
  console.error(error.message);
  stop(1);
}
