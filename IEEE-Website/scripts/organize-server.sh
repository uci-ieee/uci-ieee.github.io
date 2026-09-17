#!/bin/sh
# Run as ieee on the server. Preserve all website data and Nginx's existing path.
set -eu

old=/var/www/ieee-website-2023-2024
live=/var/www/ieee-website
backups=/var/www/ieee-website-backups

if [ "$(id -un)" != ieee ]; then
  echo 'Run this script as the ieee account.' >&2
  exit 1
fi

if [ -L "$old" ] && [ "$(readlink "$old")" = "$live" ] && [ -d "$live" ]; then
  echo 'Live website is already organized.'
elif [ -d "$old" ] && [ ! -L "$old" ] && [ ! -e "$live" ] && [ ! -L "$live" ]; then
  test -s "$old/index.html"
  test -d "$old/_next/static"
  mv -T -- "$old" "$live"
  if ! ln -s -- "$live" "$old"; then
    mv -T -- "$live" "$old"
    echo 'Could not create compatibility link; restored original directory.' >&2
    exit 1
  fi
else
  echo 'Unexpected live paths; stop and inspect /var/www before proceeding.' >&2
  exit 1
fi

mkdir -p -- "$backups"
for name in ieee-website-before-fix-20260910 ieee-website-BROKEN-20260910; do
  source_path="/var/www/$name"
  target_path="$backups/$name"
  if [ -e "$source_path" ]; then
    if [ -e "$target_path" ] || [ -L "$target_path" ]; then
      echo "Backup destination already exists: $target_path" >&2
      exit 1
    fi
    mv -T -- "$source_path" "$target_path"
  fi
done

echo 'Website organized. No files were deleted.'
ls -ld -- "$live" "$old" "$backups"
echo 'Verify https://ieee.ics.uci.edu/ in your browser.'
