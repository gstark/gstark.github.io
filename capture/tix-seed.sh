#!/bin/sh
# Makes a demo repository in $1 with the remote github.com/acme/web, and deletes the tasks of that project.
# TIX_CONFIG must point to a demo deployment, so the clip does not show your own tasks.
set -eu
: "${TIX_CONFIG:?Set TIX_CONFIG to the config of a demo deployment}"
/bin/rm -rf "$1"
/bin/mkdir -p "$1"
cd "$1"
git init -q
git remote add origin git@github.com:acme/web.git
git -c user.name=Demo -c user.email=demo@example.com commit -q --allow-empty -m "Add POST /refresh"
for id in $(tix list --all --json | node -e 'for (const t of JSON.parse(require("fs").readFileSync(0, "utf8"))) if (!t.parentShortId) console.log(t.shortId)'); do
  tix delete "$id" >/dev/null
done
