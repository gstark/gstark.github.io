Use computer use on this Mac to save screenshots of three Perch windows that are already open: Disk History, Git Watch, and Proxmox.

How it works: call `cua.getApp("Perch")` with the app name. It attaches to one Perch window, the one at the front. Save its image with the tool's own screenshot (for example `app.getScreenshot(...)`) and `fs.writeFile`. Shell `screencapture` does not work here.

Loop:
1. Attach with `cua.getApp("Perch")` and take a screenshot. Find which window it is from its title.
2. If it is Disk History, save `/tmp/perch-cap/raw/disk-history.png`. If it is Git Watch, save `/tmp/perch-cap/raw/git-watch.png`. If it is Proxmox, save `/tmp/perch-cap/raw/proxmox.png`.
3. Press Command+W in that window to close it. Then attach again and repeat until all three files exist or Perch has no windows left.

Rules:
- The only key you may press is Command+W, to close a window you already captured. Do not click, type, or scroll.
- Do not push, ignore, or scan anything in Git Watch. Do not change any settings. Do not touch other apps.
- Nobody can answer questions during this run. If you are blocked, explain what failed and stop.
When done, print each path, its pixel size (use `sips -g pixelWidth -g pixelHeight`), and one line on what each window shows.
