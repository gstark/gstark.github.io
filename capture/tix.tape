# tix and git must be on PATH, and TIX_CONFIG must point to a demo deployment.
# Run from the repo root: vhs capture/tix.tape
Output public/media/tix/tasks.mp4

Set Shell bash
Set Theme "Catppuccin Mocha"
Set FontSize 16
Set Width 1200
Set Height 640
Set Padding 24
Set TypingSpeed 35ms

Hide
Type "capture/tix-seed.sh /tmp/tix-demo/web && cd /tmp/tix-demo/web && PS1='web $ ' && clear"
Enter
Sleep 3s
Show

Type `epic=$(tix create "Add token refresh" -d "Refresh the JWT before it expires.")`
Enter
Sleep 1s
Type `api=$(tix create "Write the refresh endpoint" --parent $epic)`
Enter
Sleep 1s
Type `ui=$(tix create "Refresh in the API client" --parent $epic)`
Enter
Sleep 1s
Type "tix block $ui --by $api"
Enter
Sleep 1s
Type "clear && tix"
Enter
Sleep 1500ms
Screenshot public/media/tix/tree.png
Sleep 1500ms
Type "tix list --ready"
Enter
Sleep 2s
Type `tix done $api -r "Added POST /refresh. pnpm test: 52 passed." --commit HEAD`
Enter
Sleep 2s
Type "clear && tix show $epic"
Enter
Sleep 5s
