# whichdns must be on PATH. Run from the repo root: vhs capture/whichdns.tape
Output public/media/whichdns/run.mp4

Set Shell zsh
Set Theme "Catppuccin Mocha"
Set FontSize 15
Set Width 1440
Set Height 580
Set Padding 24
Set TypingSpeed 45ms
Set PlaybackSpeed 3

Hide
Type "PROMPT='$ ' && clear"
Enter
Show

Type "whichdns --public-only --iterations 1 --pause-ms 50 --top 12"
Sleep 400ms
Enter
Wait+Screen@90s /This ranking is a snapshot/
Screenshot public/media/whichdns/report.png
Sleep 6s
