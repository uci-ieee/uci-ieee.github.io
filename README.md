# UCI IEEE website

This repository deploys three sites together to https://uci-ieee.github.io/:

| Source | Published URL |
| --- | --- |
| `IEEE-Website/` (Next.js static export) | `/` |
| `micromouse-webpages/` (HTML and Sass) | `/micromouse/` |
| `ops-webpages/` (HTML and Sass) | `/ops-program/` |

The main site's `/Micromouse/` and `/ops/` overview pages remain available.
Micromouse's original `/micromouse/mm_index.html` URL also remains available.
URL capitalization matters on GitHub Pages.

The imported sites are ordinary directories in this repository. Their original
Git metadata is preserved locally in the ignored `.source-git-backups/` folder;
it is not needed for deployment and should not be committed.

## Develop and build

Use Node.js 24 and run from the repository root:

```sh
npm run install:sites
npm run dev
```

Open http://localhost:3000/ to develop all three sites together:

- Main site: http://localhost:3000/
- Micromouse: http://localhost:3000/micromouse/
- OPS: http://localhost:3000/ops-program/

The main site has Next.js hot reload. Program HTML and JavaScript changes appear
when you refresh the page; their Sass styles compile automatically. Press Ctrl+C
to stop all servers and watchers. Stop any existing Next.js development server
first so port 3000 is available. Set `PORT` to use a different port if needed.

Use the root `npm run dev` command for this combined setup. Running
`npm run dev --prefix IEEE-Website` serves only the main site and returns 404
for the two program sites.

To check the production build:

```sh
npm run lint
npm run build
npm run preview
```

The build exports Next.js, compiles each program's Sass, and assembles the
published files in `dist/`. Edit the three source directories; do not commit
`dist/`, `out/`, `.next/`, or `node_modules/`. The assembly includes browser
modules and downloadable program assets, but excludes development dependencies.
Do not run the legacy cache-busting scripts; they rewrite source HTML.

`npm run preview` serves the entire built site at http://localhost:8000/ using
Node.js. Rebuild after source changes to update this production preview. The
development command serves program files directly, so it does not need a full
build or a copy of the program assets for each edit.

## Enable deployment

1. Commit the source directories and the root build/workflow files to this
   repository, then push to `main` in `uci-ieee/uci-ieee.github.io`.
2. In the GitHub repository, open **Settings → Pages → Build and deployment**
   and set **Source** to **GitHub Actions**.
3. Open **Actions → Deploy combined website to GitHub Pages** and inspect the
   run. If needed, use **Run workflow** after enabling Pages.
4. Visit https://uci-ieee.github.io/ and check both program links, return links,
   downloads, and the Micromouse modules page.

Pull requests run the build and lint checks; pushes to `main` publish the site.
This setup assumes an organization site at the domain root, so it does not set
a Next.js `basePath`. Renaming this repository to a project repository would
require updating root-relative links and asset paths.

GitHub Pages serves static files. The Micromouse modules page still retrieves
data from its existing Google Apps Script endpoint; that external service must
remain accessible to browser requests. Fonts and some scripts also use CDNs.

The existing `IEEE-Website/docs/server/` instructions describe the previous
Nginx deployment, not this GitHub Pages workflow. To use `ieee.ics.uci.edu`
instead of the default Pages address, configure the custom domain in Pages
and arrange the DNS change with the administrator of the UCI domain. Deploy
and verify the default Pages URL before changing DNS.
