#!/bin/sh
# Converts captures in public/media/<slug> for the web.
# PNG becomes lossless WebP. MP4 gets its index moved to the front so it starts to play at once.
# Usage: capture/optimize.sh whichdns
set -eu
dir="public/media/$1"
for png in "$dir"/*.png; do
  [ -e "$png" ] || continue
  cwebp -quiet -lossless -z 9 "$png" -o "${png%.png}.webp"
  /bin/rm "$png"
done
for mp4 in "$dir"/*.mp4; do
  [ -e "$mp4" ] || continue
  ffmpeg -v error -y -i "$mp4" -an -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart "$mp4.tmp.mp4"
  /bin/mv "$mp4.tmp.mp4" "$mp4"
done
ls -l "$dir"
