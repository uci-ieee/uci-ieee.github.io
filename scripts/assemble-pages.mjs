import { cp, copyFile, mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");

// Only replace the generated deployment folder inside this repository.
if (path.dirname(output) !== path.resolve(root) || path.basename(output) !== "dist") {
  throw new Error("Unexpected deployment directory");
}
await stat(path.join(root, "IEEE-Website/out/index.html"));
await rm(output, { recursive: true, force: true });
await cp(path.join(root, "IEEE-Website/out"), output, { recursive: true });

for (const [source, route] of [
  ["micromouse-webpages", "micromouse"],
  ["ops-webpages", "ops-program"],
]) {
  const sourcePath = path.join(root, source);
  const target = path.join(output, route);
  await mkdir(target, { recursive: true });
  for (const entry of await readdir(sourcePath, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".html")) {
      await copyFile(path.join(sourcePath, entry.name), path.join(target, entry.name));
    }
  }
  for (const directory of ["assets", "css", "js"]) {
    await cp(path.join(sourcePath, directory), path.join(target, directory), {
      recursive: true,
      filter: (file) => path.basename(file) !== ".DS_Store",
    });
  }
  if (source === "micromouse-webpages") {
    await copyFile(path.join(target, "mm_index.html"), path.join(target, "index.html"));
    // Browser modules import these files at runtime.
    await cp(path.join(sourcePath, "scripts/customSheetsHooks"),
      path.join(target, "scripts/customSheetsHooks"), { recursive: true });
  } else {
    await cp(path.join(sourcePath, "webpage_archives"),
      path.join(target, "webpage_archives"), { recursive: true });
  }
}

await writeFile(path.join(output, ".nojekyll"), "");
console.log("Combined GitHub Pages site built in dist/");
