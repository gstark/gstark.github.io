import { Archive, Bird, Bot, Braces, Gauge, Grid3x3, ListChecks, ListFilter, MailSearch, Palette, Printer, Route, ShieldCheck, SquareTerminal, Stamp, Waypoints, type LucideIcon } from 'lucide-react'
import { aStar } from './projects/a-star.ts'
import { agentManager } from './projects/agent-manager.ts'
import { bambu3mf } from './projects/bambu3mf.ts'
import { decentJob } from './projects/decent-job.ts'
import { networkStatusFilters } from './projects/network-status-filters.ts'
import { perch } from './projects/perch.ts'
import { pietTicTacToe } from './projects/piet-tic-tac-toe.ts'
import { posterize } from './projects/posterize.ts'
import { raxon } from './projects/raxon.ts'
import { riffle } from './projects/riffle.ts'
import { shoebox } from './projects/shoebox.ts'
import { sigil } from './projects/sigil.ts'
import { swaggerTypescriptApi } from './projects/swagger-typescript-api.ts'
import { t3code } from './projects/t3code.ts'
import { tsToZod } from './projects/ts-to-zod.ts'
import { whichdns } from './projects/whichdns.ts'

export type Project = {
  name: string
  repo: string
  language: string
  description: string
}

export type CodeSample = { file: string; code: string }

// Features with a group render under that group's heading. prs are pull request numbers in the project's repo.
// video is the path of an mp4 that shows the feature.
export type Feature = { title: string; body: string; group?: string; prs?: number[]; video?: string }

// src is a path under public/media. Videos are short, muted loops.
export type Media =
  | { kind: 'image'; src: string; alt: string; width: number; height: number }
  | { kind: 'video'; src: string; poster: string; alt: string; width: number; height: number }

// A feature large enough to show with its own screenshot.
export type Highlight = { title: string; body: string; media: Media }

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
  highlights?: { heading: string; items: Highlight[] }
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

export type BioSegment = string | { text: string; href: string }

const github = (repo: string) => `https://github.com/gstark/${repo}`

export const profile = {
  name: 'Gavin Stark',
  tagline: 'Software developer since 1992, working across Ruby, systems, and the web.',
  bio: [
    ['These days I build software and AI agents for small and midsize companies, mostly in Ruby and React. Most of my clients don’t have a full engineering team, so I become one: requirements, code, infrastructure, deployment, and support. When something breaks in production, I’m the one who figures out why.'],
    [
      'For fifteen years I was the engineer behind the digital signage network at NEOCAST (Real Digital Media): I built the Rails platform that served millions of requests a day, and the custom Linux that booted thousands of screens on Intel and ARM hardware. Before that I wrote C and C++ for phone networks and ',
      { text: 'launch-vehicle tracking at Honeywell Space Systems', href: 'https://en.wikipedia.org/wiki/BMRST' },
      '.',
    ],
    ['I’ve also taught full-stack development, run the Tampa Ruby Brigade since 2006, and contributed patches to Ruby, Rake, JRuby, and GStreamer.'],
    ['On my own time, I build the software I always wished existed but never had the time or patience to write. With AI coding tools, I can now start from scratch or take an open source project and reshape it to fit how I work. A few of those projects are below.'],
  ] satisfies BioSegment[][],
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
    name: 'Shoebox',
    repo: 'shoebox',
    slug: 'shoebox',
    page: shoebox,
    icon: Archive,
    language: 'Swift',
    description:
      'macOS menu bar app and CLI that back up iCloud Photos to a drive or S3, including originals that are only in iCloud. A Swift rewrite of darwin-photos.',
  },
  {
    name: 'bambu3mf',
    repo: 'bambu3mf',
    slug: 'bambu3mf',
    page: bambu3mf,
    icon: Printer,
    language: 'Python',
    description:
      'Python library that writes Bambu Studio project files: printer and filament presets, multi-color parts, and several plates, ready to slice.',
  },
  {
    name: 'posterize',
    repo: 'posterize',
    slug: 'posterize',
    page: posterize,
    icon: Palette,
    language: 'Python',
    description:
      'Turns a flat-color PNG into a multi-color Bambu Studio print. Matches colors to your filaments, splits large art across plates, and adds dowel holes and wall keyholes.',
  },
  {
    name: 'piet-tic-tac-toe',
    repo: 'piet-tic-tac-toe',
    slug: 'piet-tic-tac-toe',
    page: pietTicTacToe,
    icon: Grid3x3,
    language: 'Piet',
    description:
      'Tic-tac-toe written in Piet, the esoteric language whose programs are images. A Perl compiler turns C-like source into the 331 by 13,709 pixel program.',
  },
  {
    name: 'a_star',
    repo: 'a_star',
    slug: 'a_star',
    page: aStar,
    icon: Waypoints,
    language: 'Ruby',
    description:
      'A* path search as a Ruby gem, driven by procs for the goal, neighbors, weight, and heuristic. Extracted from my Advent of Code solutions.',
  },
  {
    name: 'ts-to-zod',
    repo: 'ts-to-zod',
    slug: 'ts-to-zod',
    page: tsToZod,
    icon: ShieldCheck,
    language: 'Ruby',
    description:
      'Ruby gem that turns TypeScript interfaces, type aliases, and enums into Zod schemas, ordered so each schema follows the ones it uses.',
  },
  {
    name: 'swagger-typescript-api',
    repo: 'swagger-typescript-api',
    slug: 'swagger-typescript-api',
    page: swaggerTypescriptApi,
    icon: Braces,
    language: 'Ruby',
    description:
      'Ruby gem that writes TypeScript types from an OpenAPI 3.0 or 3.1 spec, with JSDoc from descriptions and custom types through x-ts-type.',
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
