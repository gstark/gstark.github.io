# sigil and bat must be on PATH. Run from the repo root: vhs capture/sigil.tape
Output public/media/sigil/test.mp4

Set Shell zsh
Set Theme "Catppuccin Mocha"
Set FontSize 16
Set Width 1400
Set Height 500
Set Padding 24
Set TypingSpeed 40ms

Hide
Type "capture/sigil-seed.sh /tmp/sigil-demo && cd /tmp/sigil-demo && PROMPT='$ ' && clear"
Enter
Show

# The first bug: it divides by 10, not 100.
Type "bat -pp -l rust discount.sg"
Enter
Sleep 2500ms
Type "sigil add discount.sg && sigil test discount"
Enter
Sleep 4s
Screenshot public/media/sigil/counterexample.png

# Fix the division. The next run finds an overflow.
Hide
Type "sed -i '' 's|/ 10$|/ 100|' discount.sg && clear"
Enter
Show
Type "bat -pp -l rust --highlight-line 7 discount.sg"
Enter
Sleep 2s
Type "sigil add discount.sg && sigil test discount"
Enter
Sleep 4s

# Bound the price. Now every case passes.
Hide
Type "sed -i '' 's|^  requires price >= 0$|  requires price >= 0 and price <= 100_000_000|' discount.sg && clear"
Enter
Show
Type "bat -pp -l rust --highlight-line 3 discount.sg"
Enter
Sleep 2s
Type "sigil add discount.sg && sigil test discount"
Enter
Sleep 4s
