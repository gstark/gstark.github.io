import { ProjectCard, ProjectRow } from './components/ProjectCard'
import { ThemeToggle } from './components/ThemeToggle'
import { featured, more, profile, repoUrl, talks } from './data'

export default function App() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
      <header className="flex items-start justify-between gap-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{profile.name}</h1>
          <p className="max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">{profile.tagline}</p>
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-300">
              {paragraph.map((segment, j) =>
                typeof segment === 'string' ? (
                  segment
                ) : (
                  <a key={j} href={segment.href} className="text-accent hover:underline">{segment.text}</a>
                ),
              )}
            </p>
          ))}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={profile.github} className="text-accent hover:underline">GitHub</a>
            <a href={`mailto:${profile.email}`} className="text-accent hover:underline">Email</a>
            <a href={profile.resume} className="text-accent hover:underline">Resume</a>
            <a href="#projects" className="text-neutral-500 hover:underline">Projects</a>
            <a href="#talks" className="text-neutral-500 hover:underline">Talks</a>
          </nav>
        </div>
        <ThemeToggle />
      </header>

      <section id="projects" className="mt-20">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.repo} project={p} />
          ))}
        </div>

        <h3 className="mt-12 mb-2 text-sm font-semibold tracking-wide text-neutral-500 uppercase">More projects</h3>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {more.map((p) => (
            <ProjectRow key={p.repo} project={p} />
          ))}
        </div>
      </section>

      <section id="talks" className="mt-20">
        <SectionHeading>Talks</SectionHeading>
        <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {talks.map((t) => (
            <li key={t.repo}>
              <a href={repoUrl(t.repo)} className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="flex-1 font-medium group-hover:text-accent">{t.title}</span>
                {t.venue && <span className="text-sm text-neutral-600 dark:text-neutral-400">{t.venue}</span>}
                <span className="w-12 font-mono text-xs text-neutral-500 sm:text-right">{t.year ?? ''}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-24 border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-neutral-800">
        Formerly an instructor at Suncoast Developers Guild and The Iron Yard, a developer at Real Digital Media, and an engineer at Honeywell Space Systems.
      </footer>
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 text-xl font-semibold tracking-tight">{children}</h2>
}
