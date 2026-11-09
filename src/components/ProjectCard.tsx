import { LanguageLogo } from './LanguageLogo'
import type { LucideIcon } from 'lucide-react'
import { siHomebrew } from 'simple-icons'
import { projectPath, repoUrl, type FeaturedProject, type Project, type Talk } from '../data'

export function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <IconCard
      href={projectPath(project.slug)}
      icon={project.icon}
      title={project.name}
      meta={
        <>
          {project.page.install.startsWith('brew ') && <HomebrewLogo />}
          <LanguageLogo language={project.language} />
          {project.language}
        </>
      }
    >
      {project.description}
    </IconCard>
  )
}

function HomebrewLogo() {
  return (
    <span
      title="Installs with Homebrew"
      className="mr-2 flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-amber-900 dark:bg-amber-400/15 dark:text-amber-300"
    >
      <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="currentColor" aria-hidden>
        <path d={siHomebrew.path} />
      </svg>
      brew
      <span className="sr-only">: installs with Homebrew</span>
    </span>
  )
}

export function TalkCard({ talk }: { talk: Talk }) {
  return (
    <IconCard href={repoUrl(talk.repo)} icon={talk.icon} title={talk.title}>
      {talk.venue}
    </IconCard>
  )
}

function IconCard({ href, icon: Icon, title, meta, children }: {
  href: string
  icon: LucideIcon
  title: string
  meta?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="group flex flex-col gap-3 rounded-xl border border-neutral-200 px-6 pt-7 pb-6 transition-colors hover:border-accent/60 dark:border-neutral-800 dark:hover:border-accent/60"
    >
      <div className="blueprint mb-2 flex size-23 items-center justify-center rounded-3xl text-white">
        <Icon className="size-11.5" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold group-hover:text-accent">{title}</h3>
        {meta && <span className="flex items-center gap-1.5 font-mono text-xs text-neutral-700 dark:text-neutral-300">{meta}</span>}
      </div>
      {children && <p className="text-sm leading-relaxed text-pretty text-neutral-600 dark:text-neutral-300">{children}</p>}
    </a>
  )
}

export function ProjectRow({ project }: { project: Project }) {
  return (
    <a
      href={repoUrl(project.repo)}
      className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
    >
      <span className="w-48 shrink-0 font-medium group-hover:text-accent">{project.name}</span>
      <span className="flex-1 text-sm text-neutral-600 dark:text-neutral-300">{project.description}</span>
      <span className="font-mono text-xs text-neutral-500">{project.language}</span>
    </a>
  )
}
