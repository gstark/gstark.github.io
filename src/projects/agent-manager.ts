import type { ProjectPageContent } from '../data.ts'

export const agentManager: ProjectPageContent = {
  tagline: 'A package manager for AI agent skills, rules, and policies.',
  summary: [
    'Claude Code and Codex read skills and rules from files in each repository, or from one global folder. Global files apply to every project, so your Go rules show up in your React app. Copies in each repository drift apart.',
    '`agm` keeps one library of skills, rules, and packs on your machine. Each project lists what it needs in `.agent-manager.toml`, and `agm install` writes exactly those files.',
  ],
  status: 'v0.1',
  note: 'A personal project, built for my own Claude Code and Codex setup.',
  license: 'MIT',
  install: 'brew install gstark/tap/agm',
  media: [
    {
      kind: 'video',
      src: '/media/agent-manager/install.mp4',
      poster: '/media/agent-manager/install.webp',
      alt: 'agm lists the skills in the library, adds the ruby pack and the tdd skill to a project, installs them, and shows the files it wrote under .claude, .agents, and .agm.',
      width: 1200,
      height: 640,
    },
  ],
  example: {
    file: '.agent-manager.toml',
    code: `skills = ["tdd", "debugging"]
rules = ["concise-output"]
policies = ["no-network"]
packs = ["ruby"]

[[local_rules]]
name = "use-rspec"
description = "Always use RSpec"
paths = ["**/*.rb"]
content = "Use RSpec for all Ruby tests"`,
  },
  features: [
    {
      title: 'Claude Code and Codex',
      body: 'One install writes `.claude/` for Claude Code, and `AGENTS.md` plus `.codex/rules/` for Codex.',
    },
    {
      title: 'One copy of each skill',
      body: 'Skills install once into `.agm/skills/`. Symlinks put them in `.claude/skills/` and `.agents/skills/`.',
    },
    {
      title: 'Packs',
      body: 'Bundle skills, rules, and policies into a pack such as `ruby` or `react`. Add the whole set to a project in one command.',
    },
    {
      title: 'Import from GitHub',
      body: '`agm import owner/repo@skill` copies a skill into your library, where you can change it to fit how you work.',
    },
    {
      title: 'Rules scoped to paths',
      body: 'A rule can carry file globs, so a rule for `**/*.rb` applies only to Ruby files.',
    },
    {
      title: 'TUI and JSON',
      body: '`agm tui` browses and toggles items for the current project. Every list command takes `--json`.',
    },
  ],
  steps: [
    {
      title: 'Install',
      body: 'Or `go install github.com/gstark/agent-manager/cmd/agm@latest`.',
      code: 'brew install gstark/tap/agm',
    },
    {
      title: 'Set up a project',
      code: `cd your-project
agm init
agm skills create tdd
agm add skill tdd`,
    },
    {
      title: 'Write the agent files',
      body: 'Run this again after you change the project config.',
      code: 'agm install',
    },
  ],
}
