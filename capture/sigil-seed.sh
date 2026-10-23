#!/bin/sh
# Writes the discount demo, with its first bug, into an empty folder at $1.
set -eu
/bin/rm -rf "$1" && /bin/mkdir -p "$1"
cat > "$1/discount.sg" <<'SG'
/// Takes a percentage off a price in cents.
fn discount(price: Int, percent: Int) -> Int
  requires price >= 0
  requires percent >= 0 and percent <= 100
  ensures r => r >= 0 and r <= price
{
  price - price * percent / 10
}
SG
