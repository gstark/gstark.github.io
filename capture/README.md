# Capture

Scripts that make the screenshots and clips in `public/media/<slug>/`. Run each one from the repo root. Then run `capture/optimize.sh <slug>`, which turns PNG into WebP and prepares MP4 for streaming.

The terminal recordings use [VHS](https://github.com/charmbracelet/vhs) (`brew install vhs`).

## whichdns

Build whichdns with Zig 0.16 and put `zig-out/bin` on `PATH`. The run takes about 50 seconds. `--public-only` keeps local resolver addresses out of the clip.

```sh
PATH=/path/to/whichdns/zig-out/bin:$PATH vhs capture/whichdns.tape
capture/optimize.sh whichdns
```

## agent-manager

`agm-seed.sh` builds a demo library in `/tmp/agm-demo`, so the clip does not show your own library.

```sh
vhs capture/agent-manager.tape
capture/optimize.sh agent-manager
```

## Sigil

`sigil-seed.sh` writes a `discount` function with a bug into `/tmp/sigil-demo`. The tape fixes it in two steps.

```sh
vhs capture/sigil.tape
capture/optimize.sh sigil
```

## Perch

A person, or a computer-use agent, must drive the live palette, because the hotkey needs keyboard input. `perch-prompt.md` holds the steps that gpt-6-astra followed through Codex. Do not open clipboard history: it shows your own clipboard.

```sh
codex exec -m gpt-6-astra -s danger-full-access --skip-git-repo-check - < capture/perch-prompt.md
capture/optimize.sh perch
```

## decent_job

Start the example app from the decent_job repo against its own database. Let it run for a few minutes so the charts have data.

```sh
cd decent_job/example
export DECENT_JOB_DATABASE_URL=postgres:///decent_job_screens
bundle install && bin/setup
bin/worker & HOST=127.0.0.1 bin/dashboard & bin/seed --loop &
```

Then, from this repo. The script uses the installed Google Chrome:

```sh
node capture/decent-job.mjs
capture/optimize.sh decent_job
```
