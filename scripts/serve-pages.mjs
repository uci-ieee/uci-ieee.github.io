import http from "node:http";
import { createReadStream } from "node:fs";
import { realpath, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const root = fileURLToPath(new URL("../", import.meta.url));
const mime = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json", ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp",
  ".ico": "image/x-icon", ".pdf": "application/pdf", ".mp4": "video/mp4",
  ".woff": "font/woff", ".woff2": "font/woff2",
};

export function createSiteServer({ programsOnly = false } = {}) {
  return http.createServer(async (req, res) => {
    try {
      if (req.method !== "GET" && req.method !== "HEAD") {
        res.writeHead(405, { Allow: "GET, HEAD" });
        return res.end();
      }
      const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
      let base = path.join(root, "dist");
      let relative = pathname.slice(1);
      if (programsOnly) {
        const route = /^\/(micromouse|ops-program)(?:\/(.*))?$/.exec(pathname);
        if (!route) { res.writeHead(404); return res.end("Not found"); }
        const mouse = route[1] === "micromouse";
        base = path.join(root, mouse ? "micromouse-webpages" : "ops-webpages");
        relative = route[2] || (mouse ? "mm_index.html" : "index.html");
        if (mouse && relative === "index.html") relative = "mm_index.html";
        // Match the files included in the production assembly.
        if (!/^[^/\\]+\.html$/.test(relative) &&
            !/^(assets|css|js)\//.test(relative) &&
            !(mouse ? relative.startsWith("scripts/customSheetsHooks/") :
              relative.startsWith("webpage_archives/"))) {
          res.writeHead(404); return res.end("Not found");
        }
      }
      let filename = path.resolve(base, relative);
      const within = (file, directory) => file === directory || file.startsWith(directory + path.sep);
      if (!within(filename, base)) { res.writeHead(404); return res.end("Not found"); }
      let info = await stat(filename);
      if (info.isDirectory()) {
        if (!pathname.endsWith("/")) {
          res.writeHead(308, { Location: pathname + "/" + new URL(req.url, "http://localhost").search });
          return res.end();
        }
        filename = path.join(filename, "index.html");
        info = await stat(filename);
      }
      if (!info.isFile() || !within(await realpath(filename), await realpath(base))) {
        res.writeHead(404); return res.end("Not found");
      }
      res.writeHead(200, {
        "Content-Type": mime[path.extname(filename).toLowerCase()] || "application/octet-stream",
        "Content-Length": info.size,
        "Cache-Control": "no-store",
      });
      if (req.method === "HEAD") return res.end();
      const stream = createReadStream(filename);
      stream.on("error", () => res.destroy());
      res.on("close", () => stream.destroy());
      stream.pipe(res);
    } catch (error) {
      res.writeHead(error.code === "ENOENT" || error.code === "ENOTDIR" || error instanceof URIError ? 404 : 500);
      res.end("Unable to serve this file");
    }
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await stat(path.join(root, "dist/index.html")).catch(() => {
    console.error("Run npm run build before npm run preview.");
    process.exit(1);
  });
  const port = Number(process.env.PORT || 8000);
  const server = createSiteServer();
  server.on("error", (error) => { console.error(error.message); process.exit(1); });
  server.listen(port, "127.0.0.1", () => console.log(`Combined production preview: http://localhost:${port}/`));
}
