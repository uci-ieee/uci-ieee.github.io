# IEEE website server

Live site: https://ieee.ics.uci.edu/

Source: https://github.com/uci-ieee/IEEE-Website

## Log in with the IEEE account

Run this on your computer (PowerShell on Windows):

```sh
ssh ieee@ieee.ics.uci.edu
```

Enter the IEEE account password when prompted. Nothing appears while typing
the password; that is normal. Ask the current authorized IEEE administrator
for the password. Never put passwords or private keys in this document or GitHub.

`ieee@ieee:~$` is the server prompt. `PS C:\...>` is your Windows computer.
Run `exit` to leave SSH.

## Directory guide

After running `organize-server.sh`:

| Path | Purpose |
| --- | --- |
| `/var/www/ieee-website/` | Current public website |
| `/var/www/ieee-website-2023-2024` | Compatibility symlink to the current website; Nginx still uses this path |
| `/var/www/ieee-website-backups/` | Recovery copies and future backups, outside the public website |
| `/home/ieee/website-docs/README.md` | This operations guide |
| `/etc/nginx/sites-enabled/ieee-new` | Nginx domain configuration |

Before cleanup, the live directory is `/var/www/ieee-website-2023-2024/`.
The cleanup script renames it and leaves a compatibility link. Do not remove
that link while Nginx uses it. The script moves only the two September 10
recovery copies into backups. It leaves the dashboard, older websites,
`copy`, `default`, `html`, and home-directory services alone.

The July archive in `/home/ieee` is retained separately. Nothing is deleted.
Confirm older sites are unused before archiving them.

## How the website runs

Nginx serves the exported HTML, CSS, JavaScript, and images continuously.
You do not run `npm start` on the server or keep an SSH session open.
Normal file deployments do not require an Nginx restart or domain changes.

The `/micromouse/` and `/ops-program/` directories contain legacy project
websites linked from the new site. Preserve them: GitHub does not supply them.

## Set up development on your computer

Install Git and Node.js with npm (the local build was verified with Node.js 24).
In your local terminal:

```sh
git clone https://github.com/uci-ieee/IEEE-Website.git
cd IEEE-Website
npm ci
npm run dev
```

Open http://localhost:3000. Press Ctrl+C to stop. See the repository README
for the source-directory guide. Server credentials are not needed locally.

## Publish an update after cleanup

Run each step separately. Stop if any command fails. These commands assume
the directory cleanup has completed successfully.

### 1. Build on your computer

Inside the local repository:

```sh
npm ci
npm run lint
npm run build
```

The generated `out/` folder is the public website. Do not upload the entire
Git repository or `node_modules`.

### 2. Back up in SSH

```sh
mkdir -p /var/www/ieee-website-backups
website_backup="/var/www/ieee-website-backups/site-$(date +%Y%m%d-%H%M%S).tar.gz"
tar -czf "$website_backup" -C /var/www ieee-website
```

Only after tar succeeds, record the backup path:

```sh
printf '%s\n' "$website_backup"
```

### 3. Upload in local PowerShell

Inside your local `IEEE-Website` directory:

```powershell
scp -r .\out\_next ieee@ieee.ics.uci.edu:/var/www/ieee-website/
scp -r .\out\* ieee@ieee.ics.uci.edu:/var/www/ieee-website/
```

Assets go first to reduce mismatches during the upload. This is an in-place
deployment, so visitors can briefly see mixed versions. Existing unmatched
files, including legacy project pages, are retained. Do not delete `_next`
before uploading; older pages may still reference its files.

### 4. Fix permissions in SSH

```sh
find /var/www/ieee-website -type d -exec chmod 755 {} +
find /var/www/ieee-website -type f -exec chmod 644 {} +
```

Successful permission commands normally print nothing. Apply these only to
the public website, never to `/home/ieee`, `.ssh`, or other services.
Past Windows uploads created directories with mode `700`, causing Nginx to
return 403 for CSS, JavaScript, and logos and leaving the page blank.

### 5. Verify

Hard-refresh https://ieee.ics.uci.edu/ with Ctrl+Shift+R. Check navigation,
images, `/events/`, `/Micromouse/`, and the legacy pages
`/micromouse/mm_index.html` and `/ops-program/index.html`.
Check the browser Console and Network tabs for failed CSS or JavaScript.

In SSH, you can also check:

```sh
curl -I https://ieee.ics.uci.edu/
```

A 200 homepage status alone does not prove that its assets work.

## Restore a deployment backup

Use an archive created by the backup command above. In SSH, replace the
example filename with the actual recorded backup filename:

```sh
website_backup=/var/www/ieee-website-backups/site-YYYYMMDD-HHMMSS.tar.gz
tar -tzf "$website_backup" | head
```

Confirm entries begin with `ieee-website/`. Then run these one at a time,
stopping on errors:

```sh
website_restore=$(mktemp -d /var/www/ieee-website-restore.XXXXXX)
tar -xzf "$website_backup" -C "$website_restore"
test -s "$website_restore/ieee-website/index.html"
```

After the check succeeds:

```sh
website_failed="/var/www/ieee-website-backups/failed-$(date +%Y%m%d-%H%M%S)"
test ! -e "$website_failed" &&
mv -T /var/www/ieee-website "$website_failed" &&
{ mv -T "$website_restore/ieee-website" /var/www/ieee-website ||
  { mv -T "$website_failed" /var/www/ieee-website; false; }; }
```

The directory switch briefly interrupts service. If it fails, inspect the
errors; the command attempts to put the current site back. Verify the site
afterward. The failed version is retained for diagnosis.

## Troubleshooting

- **Blank page and 403 assets:** inspect permissions with
  `namei -l /var/www/ieee-website/_next/static`. Nginx needs directory traversal
  and file read access. Run the public-site permission commands above.
- **404 page:** check path capitalization. Linux distinguishes `/events/`
  from `/Events/` and `/Micromouse/` from `/micromouse/`.
- **Old site appears:** verify the Nginx root and deployed `index.html`.
  Restoring a historical archive restores the historical website.
- **SSH authentication fails:** include the username `ieee@`; otherwise SSH
  may use your local computer username.
- **PowerShell rejects `ls -la`:** log in first; it is a Linux command.

Server inspection commands (error logs may require administrator access):

```sh
cat /etc/nginx/sites-enabled/ieee-new
tail -n 50 /var/log/nginx/error.log
```
