#!/bin/sh
# Builds a demo agm library in $AGM_CONFIG_DIR and an empty project in $1.
set -eu
lib="$AGM_CONFIG_DIR"
/bin/rm -rf "$lib" "$1"
/bin/mkdir -p "$lib/skills" "$lib/rules" "$lib/policies" "$lib/packs" "$1"

skill() {
  /bin/mkdir -p "$lib/skills/$1"
  printf -- '---\nname: %s\ndescription: "%s"\nsource: local\n---\n\n# %s\n\n%s\n' "$1" "$2" "$1" "$2" > "$lib/skills/$1/SKILL.md"
}
rule() {
  printf -- '---\nname: %s\ndescription: "%s"\npaths: [%s]\n---\n\n%s\n' "$1" "$2" "$3" "$2" > "$lib/rules/$1.md"
}

skill tdd "Write a failing test first, then the code that makes it pass."
skill debugging "Reproduce the bug, then find the cause before you change code."
skill rspec "Write RSpec examples with local variables, not let."
skill react "Build React components without useEffect."
rule concise-output "Keep answers short." ""
rule use-rspec "Use RSpec for all Ruby tests." '"**/*.rb"'
rule tailwind "Use Tailwind utility classes, not CSS files." '"**/*.tsx"'
printf -- '---\nname: no-network\ndescription: "Ask before network calls."\n---\n\nAsk before you make a network call.\n' > "$lib/policies/no-network.md"
printf 'name = "ruby"\ndescription = "Ruby and RSpec"\nskills = ["rspec"]\nrules = ["use-rspec"]\n' > "$lib/packs/ruby.toml"
printf 'name = "react"\ndescription = "React and Tailwind"\nskills = ["react"]\nrules = ["tailwind"]\n' > "$lib/packs/react.toml"
