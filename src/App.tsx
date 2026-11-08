import { ProjectCard, ProjectRow, TalkCard } from './components/ProjectCard'
import { ThemeToggle } from './components/ThemeToggle'
import { featured, more, profile, talks } from './data'

export default function App() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-20 xl:max-w-6xl">
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
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {talks.map((t) => (
            <TalkCard key={t.repo} talk={t} />
          ))}
        </div>
      </section>

      <footer className="mt-24 border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-neutral-800">
        Formerly an instructor at Suncoast Developers Guild and The Iron Yard, a developer at Real Digital Media, and an engineer at Honeywell Space Systems.
      </footer>
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center">
      <h2 className="blueprint rounded-2xl px-5 py-2.5 text-2xl font-bold tracking-tight text-white [--grid:12px] sm:text-3xl">
        {children}
      </h2>
      <span aria-hidden className="h-px flex-1 bg-accent/40" />
    </div>
  )
}
