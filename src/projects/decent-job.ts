import type { ProjectPageContent } from '../data.ts'

export const decentJob: ProjectPageContent = {
  tagline: 'Background jobs for Ruby that need nothing but PostgreSQL.',
  summary: [
    'DecentJob keeps jobs in the PostgreSQL database you already run and works through them with a worker CLI. There is no Redis to operate and no PostgreSQL extension to install. The only runtime dependency is the `pg` gem.',
    'Jobs subclass `DecentJob::Base`, which follows the Active Job API. Rails apps can skip that and set the Active Job queue adapter to `:decent_job`. Both kinds of job can share one database and one set of workers.',
  ],
  status: 'Early, unreleased',
  note: 'A personal project. It has no published release yet, so you install it from GitHub. The goal is feature parity with GoodJob, and the repository tracks the remaining work in a parity checklist.',
  license: 'MIT',
  install: 'gem "decent_job", github: "gstark/decent_job"',
  example: {
    file: 'jobs.rb',
    code: `require "decent_job"

class GreetingJob < DecentJob::Base
  retry_on IOError, wait: 5, attempts: 3

  def perform(name)
    puts "Hello, #{name}!"
  end
end

GreetingJob.perform_later("Ada")
GreetingJob.set(queue: "mailers", priority: -10, wait: 60).perform_later("Grace")`,
  },
  media: [
    {
      kind: 'image',
      src: '/media/decent_job/overview.webp',
      alt: 'The dashboard overview: counts of queued, scheduled, retrying, running, succeeded, and discarded jobs, a table of queues, the worker list, and a grid of jobs due in the next hour.',
      width: 2560,
      height: 1600,
    },
    {
      kind: 'image',
      src: '/media/decent_job/jobs.webp',
      alt: 'The jobs page: search and filters, bulk actions, and a list of retrying jobs with their queue, attempts, and last error.',
      width: 2560,
      height: 1600,
    },
    {
      kind: 'image',
      src: '/media/decent_job/performance.webp',
      alt: 'The performance page: queue wait, run time, and total latency, a log-scale run time histogram, and breakdowns by job class and queue.',
      width: 2560,
      height: 1600,
    },
  ],
  features: [
    {
      title: 'One dependency',
      body: 'The runtime needs `pg` and nothing else. Migrations add only DecentJob tables, in a transaction you can run again.',
    },
    {
      title: 'Active Job compatible',
      body: 'Callbacks, `retry_on`, `discard_on`, `rescue_from`, and the same argument types. Or plug it in as the Active Job adapter.',
    },
    {
      title: 'Queues with their own threads',
      body: 'A queue expression like `urgent:2;default:3` gives each queue its own thread pool. Smaller priority numbers run first.',
    },
    {
      title: 'Concurrency controls',
      body: 'Concurrency limits, throttles, labels, and pauses that survive a restart. Group related work into batches.',
    },
    {
      title: 'Recurring schedules',
      body: 'Numeric or natural-language cron. After a restart, the scheduler can enqueue the runs it missed.',
    },
    {
      title: 'A dashboard with no extra gems',
      body: 'A Rack app for jobs, batches, schedules, workers, pauses, and latency. Mount it behind your own authentication.',
    },
  ],
  steps: [
    {
      title: 'Add the gem',
      file: 'Gemfile',
      code: 'gem "decent_job", github: "gstark/decent_job"',
    },
    {
      title: 'Install the tables',
      body: 'The database must already exist. Rails apps can run `bin/rails generate decent_job:migration` to keep the tables in the Rails schema.',
      code: `export DECENT_JOB_DATABASE_URL=postgres://localhost/my_application
bundle exec decent_job migrate`,
    },
    {
      title: 'Start a worker',
      body: 'SIGINT or SIGTERM stops new claims and lets running jobs finish.',
      code: 'bundle exec decent_job start --require ./jobs.rb --max-threads 5',
    },
  ],
}
