import { ArrowLeft, ArrowRight, Info } from 'lucide-react'
import { siGithub } from 'simple-icons'
import { featured, projectPath, repoUrl, type Feature, type FeaturedProject } from '../data'
import { CopyButton } from './CopyButton'
import { LanguageLogo } from './LanguageLogo'
import { ThemeToggle } from './ThemeToggle'

export function ProjectPage({ project }: { project: FeaturedProject }) {
  const { page } = project
  const Icon = project.icon
  const others = featured.filter((p) => p.slug !== project.slug)

  return (
    <div className="mx-auto max-w-4xl px-6 py-8 sm:py-12">
      <nav className="mb-8 flex items-center justify-between">
        <a href="/#projects" className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-accent dark:text-neutral-400">
          <ArrowLeft className="size-4" aria-hidden />
          Gavin Stark
        </a>
        <ThemeToggle />
      </nav>

      <header className="blueprint rounded-3xl px-6 py-10 text-white [--grid:24px] sm:px-12 sm:py-14">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/25">
          <Icon className="size-8" strokeWidth={1.75} aria-hidden />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
        <p className="mt-3 max-w-2xl text-xl leading-snug text-balance text-white/85">{page.tagline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={repoUrl(project.repo)}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-blueprint-deep transition-colors hover:bg-blue-50"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d={siGithub.path} />
            </svg>
            View on GitHub
          </a>
          <div className="flex min-w-0 items-center gap-2 rounded-lg bg-black/25 py-1 pr-1 pl-4 ring-1 ring-white/15">
            <code className="overflow-x-auto py-1.5 font-mono text-sm whitespace-nowrap">{page.install}</code>
            <CopyButton text={page.install} className="text-white/60 hover:bg-white/10 hover:text-white" />
          </div>
        </div>
      </header>

      <section className="mt-14 grid gap-10 sm:grid-cols-[1fr_13rem]">
        <div className="space-y-4">
          {page.summary.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-pretty text-neutral-700 dark:text-neutral-300">
              <Inline text={paragraph} />
            </p>
          ))}
          <aside className="flex gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
            <p>{page.note}</p>
          </aside>
        </div>
        <dl className="space-y-4 text-sm">
          <Fact label="Language">
            <span className="flex items-center gap-1.5">
              <LanguageLogo language={project.language} />
              {project.language}
            </span>
          </Fact>
          <Fact label="Status">{page.status}</Fact>
          <Fact label="License">{page.license}</Fact>
          {page.upstream && (
            <Fact label="Fork of">
              <a href={page.upstream.url} className="text-accent hover:underline">{page.upstream.name}</a>
            </Fact>
          )}
          <Fact label="Source">
            <a href={repoUrl(project.repo)} className="text-accent hover:underline">gstark/{project.repo}</a>
          </Fact>
        </dl>
      </section>

      {page.example && (
        <section className="mt-16">
          <SectionHeading>Example</SectionHeading>
          <CodeBlock file={page.example.file} code={page.example.code} />
        </section>
      )}

      <section className="mt-16">
        <SectionHeading>Features</SectionHeading>
        <div className="space-y-12">
          {groupFeatures(page.features).map(([group, features]) => (
            <div key={group ?? ''}>
              {group && <h3 className="mb-5 text-sm font-semibold tracking-wide text-neutral-500 uppercase">{group}</h3>}
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.title} className="border-t-2 border-accent/70 pt-4">
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
                      <Inline text={feature.body} />
                    </p>
                    {feature.prs && (
                      <p className="mt-2 flex flex-wrap gap-2 font-mono text-xs">
                        {feature.prs.map((pr) => (
                          <a key={pr} href={`${repoUrl(project.repo)}/pull/${pr}`} className="text-neutral-500 hover:text-accent">
                            #{pr}
                          </a>
                        ))}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading>Get started</SectionHeading>
        <ol className="space-y-8">
          {page.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="blueprint flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-semibold text-white [--grid:8px]">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1 space-y-3 pt-1">
                <h3 className="font-semibold">{step.title}</h3>
                {step.body && (
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    <Inline text={step.body} />
                  </p>
                )}
                {step.code && <CodeBlock file={step.file} code={step.code} />}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <footer className="mt-24 border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <h2 className="mb-4 text-sm font-semibold tracking-wide text-neutral-500 uppercase">More open source</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {others.map((p) => (
            <OtherProject key={p.slug} project={p} />
          ))}
        </div>
      </footer>
    </div>
  )
}

// Keeps groups in the order of their first feature.
function groupFeatures(features: Feature[]) {
  const groups = new Map<string | undefined, Feature[]>()
  for (const feature of features) {
    groups.set(feature.group, [...(groups.get(feature.group) ?? []), feature])
  }
  return [...groups]
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 text-xl font-semibold tracking-tight">{children}</h2>
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">{label}</dt>
      <dd className="mt-1 text-neutral-800 dark:text-neutral-200">{children}</dd>
    </div>
  )
}

function CodeBlock({ code, file }: { code: string; file?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 py-1 pr-1 pl-4">
        <span className="font-mono text-xs text-neutral-400">{file ?? 'shell'}</span>
        <CopyButton text={code} className="text-neutral-400 hover:bg-white/10 hover:text-white" />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function OtherProject({ project }: { project: FeaturedProject }) {
  const Icon = project.icon
  return (
    <a
      href={projectPath(project.slug)}
      className="group flex min-w-0 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
    >
      <span className="blueprint flex size-10 shrink-0 items-center justify-center rounded-xl text-white [--grid:8px]">
        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium group-hover:text-accent">{project.name}</span>
        <span className="block truncate text-sm text-neutral-500">{project.page.tagline}</span>
      </span>
      <ArrowRight className="size-4 shrink-0 text-neutral-400 group-hover:text-accent" aria-hidden />
    </a>
  )
}

// Renders `backtick` spans in content strings as inline code.
function Inline({ text }: { text: string }) {
  return text.split('`').map((part, i) =>
    i % 2 ? (
      <code key={i} className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-[0.875em] text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
        {part}
      </code>
    ) : (
      part
    ),
  )
}
