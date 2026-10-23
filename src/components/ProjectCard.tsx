import { LanguageLogo } from './LanguageLogo'
import { projectPath, repoUrl, type FeaturedProject, type Project } from '../data'

export function ProjectCard({ project }: { project: FeaturedProject }) {
  const Icon = project.icon
  return (
    <a
      href={projectPath(project.slug)}
      className="group flex flex-col gap-3 rounded-xl border border-neutral-200 px-6 pt-7 pb-6 transition-colors hover:border-accent/60 dark:border-neutral-800 dark:hover:border-accent/60"
    >
      <div className="blueprint mb-2 flex size-23 items-center justify-center rounded-3xl text-white">
        <Icon className="size-11.5" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold group-hover:text-accent">{project.name}</h3>
        <span className="flex items-center gap-1.5 font-mono text-xs text-neutral-700 dark:text-neutral-300">
          <LanguageLogo language={project.language} />
          {project.language}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-pretty text-neutral-600 dark:text-neutral-300">{project.description}</p>
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
