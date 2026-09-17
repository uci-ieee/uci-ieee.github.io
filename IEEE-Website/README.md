# IEEE at UC Irvine

This directory is part of the combined GitHub Pages repository. See the
[root README](../README.md) for the current build and deployment instructions.
The Nginx instructions below are retained for the previous server deployment.

Source code for https://ieee.ics.uci.edu/, maintained by UCI IEEE.
Built with Next.js, React, TypeScript, and Tailwind CSS. Production is a static
export served by Nginx on the IEEE server.

## Set up on your computer

Install Git and Node.js with npm. The build was verified with Node.js 24.
Run these commands in your local terminal (PowerShell on Windows):

```sh
git clone https://github.com/uci-ieee/IEEE-Website.git
cd IEEE-Website
npm ci
npm run dev
```

Open http://localhost:3000. Source changes appear automatically. Press Ctrl+C
to stop the development server. No server credentials or environment file
are needed for the current local site.

If you already have the repository, save or commit local changes before
running `git pull` to get updates.

## Directory guide

| Path | Purpose |
| --- | --- |
| `app/` | Pages, layouts, and styles; `app/page.tsx` is the homepage |
| `components/` | Shared interface components |
| `lib/` | Shared project data and utilities |
| `public/` | Images, logos, and static assets |
| `next.config.ts` | Static export configuration |
| `docs/server/README.md` | Server login, deployment, recovery, and troubleshooting |
| `scripts/organize-server.sh` | One-time server directory cleanup; preserves existing data |
| `out/` | Generated production website, ready to upload |
| `.next/` | Generated build cache |
| `node_modules/` | Installed dependencies |

Edit source files, not generated folders. Generated folders are ignored by Git.
Linux paths are case-sensitive: keep URL and filename capitalization consistent.

## Check and build

```sh
npm run lint
npm run build
```

A successful build creates `out/`, containing HTML, images, and `_next/` assets.
The production server serves these files directly; it does not need Node.js
or `npm start`.

## Deploy and maintain the server

Follow [the server README](docs/server/README.md). It explains which commands
run locally and which run in SSH, along with backups and the permissions
needed to avoid blank pages caused by 403 errors.

The older `/micromouse/` and `/ops-program/` sites are linked from this website
but are not included in this repository. Preserve them when deploying.

### Install the server guide and organize existing folders

From local PowerShell inside this repository:

```powershell
ssh ieee@ieee.ics.uci.edu "mkdir -p /home/ieee/website-docs"
scp .\docs\server\README.md .\scripts\organize-server.sh ieee@ieee.ics.uci.edu:/home/ieee/website-docs/
ssh ieee@ieee.ics.uci.edu "sh /home/ieee/website-docs/organize-server.sh"
```

The script renames the live directory to `/var/www/ieee-website`, leaves a
compatibility symlink for Nginx, and archives the two September 10 recovery
copies under `/var/www/ieee-website-backups`. Nothing is deleted. There is a
brief interval during the rename before the compatibility link is created.
Other old sites and services are left in place pending inspection.

Obtain the IEEE account password from the current authorized administrator.
Never commit passwords, private SSH keys, or server backups.
