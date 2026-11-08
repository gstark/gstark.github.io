# slip and git must be on PATH, and SLIP_CONFIG must point to a demo deployment.
# Run from the repo root: vhs capture/slip.tape
Output public/media/slip/tasks.mp4

Set Shell bash
Set Theme "Catppuccin Mocha"
Set FontSize 16
Set Width 1200
Set Height 640
Set Padding 24
Set TypingSpeed 35ms

Hide
Type "capture/slip-seed.sh /tmp/slip-demo/web && cd /tmp/slip-demo/web && PS1='web $ ' && clear"
Enter
Sleep 3s
Show

Type `epic=$(slip create "Add token refresh" -d "Refresh the JWT before it expires.")`
Enter
Sleep 1s
Type `api=$(slip create "Write the refresh endpoint" --parent $epic)`
Enter
Sleep 1s
Type `ui=$(slip create "Refresh in the API client" --parent $epic)`
Enter
Sleep 1s
Type "slip block $ui --by $api"
Enter
Sleep 1s
Type "clear && slip"
Enter
Sleep 1500ms
Screenshot public/media/slip/tree.png
Sleep 1500ms
Type "slip list --ready"
Enter
Sleep 2s
Type `slip done $api -r "Added POST /refresh. pnpm test: 52 passed." --commit HEAD`
Enter
Sleep 2s
Type "clear && slip show $epic"
Enter
Sleep 5s
