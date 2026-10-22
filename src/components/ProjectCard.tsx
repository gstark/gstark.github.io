import { repoUrl, type FeaturedProject, type Project } from '../data'

export function ProjectCard({ project }: { project: FeaturedProject }) {
  const Icon = project.icon
  return (
    <a
      href={repoUrl(project.repo)}
      className="group flex flex-col gap-3 rounded-lg border border-neutral-200 p-5 transition hover:border-accent/60 hover:shadow-sm dark:border-neutral-800 dark:hover:border-accent/60"
    >
      <div className="mx-auto mb-1 flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-105 dark:bg-accent/15">
        <Icon className="size-6" strokeWidth={1.75} aria-hidden />
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-semibold group-hover:text-accent">{project.name}</h3>
        <span className="font-mono text-xs text-neutral-500">{project.language}</span>
      </div>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{project.description}</p>
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
      <span className="flex-1 text-sm text-neutral-600 dark:text-neutral-400">{project.description}</span>
      <span className="font-mono text-xs text-neutral-500">{project.language}</span>
    </a>
  )
}
