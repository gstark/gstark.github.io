import { Bird, Bot, Gauge, ListChecks, ListFilter, MailSearch, Route, SquareTerminal, Stamp, type LucideIcon } from 'lucide-react'
import { agentManager } from './projects/agent-manager.ts'
import { decentJob } from './projects/decent-job.ts'
import { networkStatusFilters } from './projects/network-status-filters.ts'
import { perch } from './projects/perch.ts'
import { raxon } from './projects/raxon.ts'
import { riffle } from './projects/riffle.ts'
import { sigil } from './projects/sigil.ts'
import { t3code } from './projects/t3code.ts'
import { whichdns } from './projects/whichdns.ts'

export type Project = {
  name: string
  repo: string
  language: string
  description: string
}

export type CodeSample = { file: string; code: string }

// Features with a group render under that group's heading. prs are pull request numbers in the project's repo.
export type Feature = { title: string; body: string; group?: string; prs?: number[] }

// src is a path under public/media. Videos are short, muted loops.
export type Media =
  | { kind: 'image'; src: string; alt: string; width: number; height: number }
  | { kind: 'video'; src: string; poster: string; alt: string; width: number; height: number }

export type ProjectPageContent = {
  tagline: string
  summary: string[]
  note: string
  status: string
  license: string
  install: string
  upstream?: { name: string; url: string }
  example?: CodeSample
  media?: Media[]
  features: Feature[]
  steps: { title: string; body?: string; code?: string; file?: string }[]
}

export type FeaturedProject = Project & { slug: string; icon: LucideIcon; page: ProjectPageContent }

export type Talk = {
  title: string
  repo: string
  venue?: string
  year?: number
}

const github = (repo: string) => `https://github.com/gstark/${repo}`

export const profile = {
  name: 'Gavin Stark',
  tagline: 'Software developer since 1992, working across Ruby, systems, and the web.',
  bio: 'For 15 years I designed and ran the Ruby on Rails platform behind the NEOCAST digital signage network, carrying it from Rails 0.9 to 7 while it grew to millions of requests and background jobs a day. I also built the custom Ubuntu based operating system that boots thousands of its devices on Intel and ARM hardware, down to kernel and driver patches. Before web work I wrote C and C++ for PBX networks and for launch vehicle tracking at Honeywell Space Systems. I taught full stack courses at The Iron Yard and Suncoast Developers Guild, have organized the Tampa Ruby Brigade since 2006, and have patches in Ruby, Rake, JRuby, and GStreamer.',
  github: 'https://github.com/gstark',
  email: 'floaty.malice_1t@icloud.com',
  resume: 'https://resume.gstark.com',
}

export const featured: FeaturedProject[] = [
  {
    name: 'decent_job',
    repo: 'decent_job',
    slug: 'decent_job',
    page: decentJob,
    icon: ListChecks,
    language: 'Ruby',
    description:
      'PostgreSQL job runner with its own job API, an optional Active Job adapter, and a dependency-free dashboard. The only runtime dependency is pg.',
  },
  {
    name: 'Raxon',
    repo: 'raxon-public',
    slug: 'raxon',
    page: raxon,
    icon: Route,
    language: 'Ruby',
    description:
      'Rack 3 JSON API framework with file-based routing, automatic OpenAPI generation, and request and response validation.',
  },
  {
    name: 'Sigil',
    repo: 'sigil',
    slug: 'sigil',
    page: sigil,
    icon: Stamp,
    language: 'Rust',
    description:
      'A programming language designed to be written by a language model and verified by a machine. Types, capabilities, and contracts live in the signature.',
  },
  {
    name: 'whichdns',
    repo: 'whichdns',
    slug: 'whichdns',
    page: whichdns,
    icon: Gauge,
    language: 'Zig',
    description:
      'Benchmarks your system DNS against 125 public resolvers and ranks them by reliability, then latency. Native on macOS and Linux. Never changes your settings.',
  },
  {
    name: 'agent-manager',
    repo: 'agent-manager',
    slug: 'agent-manager',
    page: agentManager,
    icon: Bot,
    language: 'Go',
    description:
      'The agm CLI, a package manager for AI agent skills, rules, and policies. Curate once, then install the right set into any Claude Code or Codex project.',
  },
  {
    name: 'Perch',
    repo: 'perch',
    slug: 'perch',
    page: perch,
    icon: Bird,
    language: 'Swift',
    description:
      'Personal macOS menu bar app: fuzzy launcher, clipboard history, inline calculator, window management, CPU meters, and an unpushed-commits warning. A fork of Tinycast.',
  },
  {
    name: 'T3 Code',
    repo: 't3code',
    slug: 't3code',
    page: t3code,
    icon: SquareTerminal,
    language: 'TypeScript',
    description:
      'Personal fork of T3 Code, the app for running coding agents. Adds worktree landing, Git sync before push, justfile recipes, and a clearer timeline.',
  },
  {
    name: 'Riffle',
    repo: 'riffle',
    slug: 'riffle',
    page: riffle,
    icon: MailSearch,
    language: 'TypeScript',
    description:
      'Backs up a Gmail mailbox to your own S3 bucket every 5 minutes, then searches it in plain English from a macOS menu bar app.',
  },
  {
    name: 'Network status filters',
    repo: 'chrome-devtools-network-status-filters',
    slug: 'network-status-filters',
    page: networkStatusFilters,
    icon: ListFilter,
    language: 'TypeScript',
    description:
      'A Chrome DevTools patch that filters the Network panel by status: 2xx, 3xx, 4xx, 5xx, or an expression such as >=500.',
  },
]

export const more: Project[] = [
  {
    name: 'handbook',
    repo: 'handbook',
    language: 'Markdown',
    description: 'A guide for students of the Suncoast Developers Guild. A fork of suncoast-devs/handbook.',
  },
  {
    name: 'sdg',
    repo: 'sdg',
    language: 'Ruby',
    description: 'Rails application for managing Suncoast Developers Guild cohorts and students.',
  },
  {
    name: 'piet-tic-tac-toe',
    repo: 'piet-tic-tac-toe',
    language: 'Piet',
    description: 'Tic-tac-toe written in Piet, the esoteric language whose programs are images.',
  },
  {
    name: 'darwin-photos',
    repo: 'darwin-photos',
    language: 'Go',
    description: 'Back up iCloud Photos to external storage without bloating your Mac. A fork of cleanexit0/darwin-photos.',
  },
  {
    name: 'ts-to-zod',
    repo: 'ts-to-zod',
    language: 'Ruby',
    description: 'Ruby gem that converts TypeScript type definitions to Zod validation schemas.',
  },
  {
    name: 'swagger-typescript-api',
    repo: 'swagger-typescript-api',
    language: 'Ruby',
    description: 'Ruby gem that generates TypeScript type definitions from OpenAPI 3.0 and 3.1 specifications.',
  },
  {
    name: 'bambu3mf',
    repo: 'bambu3mf',
    language: 'Python',
    description: 'Python library for creating Bambu Studio compatible 3MF project files with multi-plate layouts and preset configuration.',
  },
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

export const projectPath = (slug: string) => `/projects/${slug}/`

export const findProject = (pathname: string) =>
  featured.find((p) => pathname.replace(/\/?$/, '/') === projectPath(p.slug))
