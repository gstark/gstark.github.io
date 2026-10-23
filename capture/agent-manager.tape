# agm, tree, and git must be on PATH. Run from the repo root: vhs capture/agent-manager.tape
Output public/media/agent-manager/install.mp4

Set Shell zsh
Set Theme "Catppuccin Mocha"
Set FontSize 16
Set Width 1200
Set Height 640
Set Padding 24
Set TypingSpeed 40ms

Hide
Type "export AGM_CONFIG_DIR=/tmp/agm-demo/library && capture/agm-seed.sh /tmp/agm-demo/billing-api && cd /tmp/agm-demo/billing-api && git init -q && PROMPT='billing-api $ ' && clear"
Enter
Show

Type "agm skills list"
Enter
Sleep 2s
Type "agm init && agm add pack ruby && agm add skill tdd"
Enter
Sleep 2s
Type "agm install"
Enter
Sleep 1s
Screenshot public/media/agent-manager/install.png
Sleep 1s
Type "clear && tree -a -I .git --noreport"
Enter
Sleep 5s
