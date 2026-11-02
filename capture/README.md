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

## tix

Use a Convex dev deployment for the clip, so it does not show your own tasks. In the tix clone, make a token on the dev deployment and log in with a separate config. `tix-seed.sh` makes a demo repository in `/tmp/tix-demo/web` and deletes its old tasks.

```sh
TIX_CONFIG=/tmp/tix-demo/config.toml tix login --url https://<dev deployment>.convex.cloud --token tix_...
TIX_CONFIG=/tmp/tix-demo/config.toml vhs capture/tix.tape
capture/optimize.sh tix
```

## Perch

A person, or a computer-use agent, must drive the live palette, because the hotkey needs keyboard input. `perch-prompt.md` holds the steps that gpt-6-astra followed through Codex. Do not open clipboard history: it shows your own clipboard.

```sh
codex exec -m gpt-6-astra -s danger-full-access --skip-git-repo-check - < capture/perch-prompt.md
capture/optimize.sh perch
```

The agent cannot click the menu bar item. To capture the windows, open Disk History, Git Watch, Proxmox, and Clean Up Projects from the Perch menu yourself. Scan a folder you are happy to show before the capture, because the list shows project paths. Then run `perch-windows-prompt.md`. The agent saves the front window, closes it with Command+W, and continues with the next window.

Git Watch lists the repositories you ignored below the ones to push. Crop it to the header and the first rows before you copy it in:

```sh
codex exec -m gpt-6-astra -s danger-full-access --skip-git-repo-check - < capture/perch-windows-prompt.md
magick /tmp/perch-cap/raw/git-watch.png -crop 1120x522+0+0 +repage /tmp/perch-cap/raw/git-watch.png
/bin/cp /tmp/perch-cap/raw/*.png public/media/perch/
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

## Reel

The clip is 30 seconds of Big Buck Bunny (CC BY 3.0) from 1:10, from the 1080p copy on Wikimedia Commons. An MP4 gives exact frame numbers.

```sh
mkdir -p /tmp/reel-cap/video /tmp/reel-cap/raw && cd /tmp/reel-cap/video
curl -fsSO https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.1080p.vp9.webm
ffmpeg -ss 70 -i Big_Buck_Bunny_4K.webm.1080p.vp9.webm -t 30 -an -c:v libx264 -crf 18 -pix_fmt yuv420p big-buck-bunny.mp4
```

Open the clip in Reel and pause on frame 640. A person, or a computer-use agent, must press the keys. Capture the window with `screencapture -o -l <windowID>`. Then press Shift+Command+C. Open the new folder in `~/Library/Caches/com.gstark.Reel/Frames/` in Finder with icon view, labels at the bottom, no toolbar, and no sidebar, and capture that window too.

A film frame is large as lossless WebP, so convert these two with loss instead of `optimize.sh`:

```sh
cwebp -q 88 -m 6 player.png -o public/media/reel/player.webp
cwebp -q 85 -m 6 frames.png -o public/media/reel/frames.webp
```
