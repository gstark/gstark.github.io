export type Project = {
  name: string
  repo: string
  language: string
  description: string
}

export type Talk = {
  title: string
  repo: string
  venue?: string
  year?: number
}

const github = (repo: string) => `https://github.com/gstark/${repo}`

export const profile = {
  name: 'Gavin Stark',
  tagline:
    'I am a software developer with over 30 years of development experience. I build developer tools, Ruby infrastructure, and small native apps. Former instructor at Suncoast Developers Guild and The Iron Yard.',
  github: 'https://github.com/gstark',
  email: 'floaty.malice_1t@icloud.com',
  resume: 'https://resume.gstark.com',
}

export const featured: Project[] = [
  {
    name: 'decent_job',
    repo: 'decent_job',
    language: 'Ruby',
    description:
      'PostgreSQL job runner with its own job API, an optional Active Job adapter, and a dependency-free dashboard. The only runtime dependency is pg.',
  },
  {
    name: 'Raxon',
    repo: 'raxon-public',
    language: 'Ruby',
    description:
      'Rack 3 JSON API framework with file-based routing, automatic OpenAPI generation, and request and response validation.',
  },
  {
    name: 'Sigil',
    repo: 'sigil',
    language: 'Rust',
    description:
      'A programming language designed to be written by a language model and verified by a machine. Types, capabilities, and contracts live in the signature.',
  },
  {
    name: 'whichdns',
    repo: 'whichdns',
    language: 'Zig',
    description:
      'Benchmarks your system DNS against 125 public resolvers and ranks them by reliability, then latency. Native on macOS and Linux. Never changes your settings.',
  },
  {
    name: 'agm',
    repo: 'agent-manager',
    language: 'Go',
    description:
      'Package manager for AI agent skills, rules, and policies. Curate once, then install the right set into any Claude Code or Codex project.',
  },
  {
    name: 'Perch',
    repo: 'perch',
    language: 'Swift',
    description:
      'Personal macOS menu bar app: fuzzy launcher, clipboard history, inline calculator, window management, CPU meters, and an unpushed-commits warning. A fork of Tinycast.',
  },
]

export const more: Project[] = [
  {
    name: 'gsde',
    repo: 'gsde',
    language: 'Swift',
    description: "Gavin's Swanky Dev Environment. An ongoing attempt to build my favorite and preferred dev environment.",
  },
  {
    name: 'homebrew-easy-install',
    repo: 'homebrew-easy-install',
    language: 'Swift',
    description: 'Mac GUI app that installs Homebrew for people who do not use the terminal.',
  },
  {
    name: 'tic-tac-toe',
    repo: 'tic-tac-toe',
    language: 'C',
    description: 'Unbeatable tic-tac-toe. Minimax with a precomputed move cache, in Ruby, C, and Piet.',
  },
  {
    name: 'a_star',
    repo: 'a_star',
    language: 'Ruby',
    description: 'A* path search as a gem, extracted from Advent of Code solutions.',
  },
  {
    name: 'advent-of-code',
    repo: 'advent-of-code',
    language: 'Ruby',
    description: 'My Advent of Code solutions.',
  },
  {
    name: 'rulelint',
    repo: 'rulelint',
    language: 'TypeScript',
    description: 'CLI that checks code changes against rules written in markdown.',
  },
  {
    name: 'stark.nvim',
    repo: 'stark.nvim',
    language: 'Lua',
    description: 'High-contrast Neovim colorscheme on a true black background.',
  },
  {
    name: 'kids_math_books',
    repo: 'kids_math_books',
    language: 'Markdown',
    description: 'Community list of good math and programming books for kids of all ages.',
  },
]

export const talks: Talk[] = [
  { title: 'Algorithms, not Al Gore’s Rhythm', repo: 'talk-algorithms', venue: 'The Iron Yard, Suncoast Developers Guild, Women Who Code Tampa' },
  { title: 'Writing code that writes code', repo: 'talk-writing-code-that-writes-code' },
  { title: 'Mathematical concepts of infinity', repo: 'talk-infinity' },
  { title: 'State machines', repo: 'talk-state-machines' },
  { title: 'The halting problem', repo: 'talk-halting-problem' },
  { title: 'Debugging', repo: 'talk-debugging' },
  { title: 'Security', repo: 'talk-security' },
  { title: 'Ruby 2.5', repo: 'talk-Ruby-2.5' },
  { title: 'webpack with Rails', repo: 'talk-webpacker-rails' },
  { title: 'React with Rails', repo: 'talk-react-rails' },
  { title: 'Enumerable', repo: 'talk-iron-yard-enumerable', venue: 'The Iron Yard', year: 2015 },
  { title: 'Tampa Ruby meetup', repo: 'talk-tampa_rb_2012_04', venue: 'Tampa.rb', year: 2012 },
  { title: 'JRuby', repo: 'talk-lunch20-jruby', venue: 'Lunch 2.0', year: 2009 },
  { title: 'JRuby', repo: 'talk-day_of_ruby_jruby', venue: 'Day of Ruby', year: 2009 },
  { title: 'Git', repo: 'talk-tampa_rb_2009_02', venue: 'Tampa.rb', year: 2009 },
]

export const repoUrl = github
