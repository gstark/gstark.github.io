import type { ProjectPageContent } from '../data.ts'

export const whichdns: ProjectPageContent = {
  tagline: 'Find the fastest reliable DNS resolver from where you are.',
  summary: [
    'whichdns tests the DNS servers your machine uses now against 125 public resolvers. It ranks them by reliability first and latency second, and it never changes your DNS settings.',
    'The idea and the measurements come from Steve Gibson\'s DNS Benchmark, which is a Windows program. whichdns runs natively on macOS and Linux, on both ARM and x86.',
  ],
  status: 'v0.4.0',
  note: 'A personal project. Homebrew installs a prebuilt binary for macOS or Linux. To build it yourself, you need Zig 0.16. Zig 0.17 cannot build this version.',
  license: 'MIT',
  install: 'brew install gstark/tap/whichdns',
  media: [
    {
      kind: 'video',
      src: '/media/whichdns/run.mp4',
      poster: '/media/whichdns/report.webp',
      alt: 'whichdns validates 125 public resolvers with a live progress bar, then prints the 12 fastest reliable ones, with NTT first at 22 ms.',
      width: 1440,
      height: 580,
    },
  ],
  example: {
    file: 'terminal',
    code: `whichdns --top 10                    # system and public resolvers, best 10
whichdns --system-only               # only the resolvers you use now
whichdns --server 192.168.1.1        # add your router for this run
whichdns --add-server 192.168.1.1    # add it to every future run
whichdns --json | jq 'select(.type == "summary") | .fastest'`,
  },
  features: [
    {
      title: 'Three kinds of lookup',
      body: 'Cached names, random subdomains of popular domains, and random `.com` names. Each pass takes 50 samples of each kind.',
    },
    {
      title: 'Reliability before speed',
      body: 'A resolver must pass validation before any timing. One that answers a random `.com` name with an address is disqualified for redirecting.',
    },
    {
      title: 'Your real configuration',
      body: 'On macOS it reads `scutil --dns`, VPN and scoped resolvers included. On Linux it reads `/etc/resolv.conf`. IPv4 and IPv6 both work.',
    },
    {
      title: 'Output for scripts',
      body: '`--json` writes progress, each result, and a final summary as JSON Lines, so a script or an agent can act on the answer.',
    },
    {
      title: 'A live dashboard',
      body: 'The terminal view shows progress and an ETA, then the ranked report. Piped output gets plain text.',
    },
    {
      title: 'No dependencies',
      body: 'One Zig binary that links only the system C library. The benchmark core does no heap allocation.',
    },
  ],
  steps: [
    {
      title: 'Install',
      body: 'The formula installs the prebuilt binary for macOS or Linux, on ARM or x86. To build from source, clone the repository and run `zig build -Doptimize=ReleaseSmall`. `sh scripts/install-zig.sh` installs a checksum-verified Zig 0.16 into the project if you need one.',
      code: 'brew install gstark/tap/whichdns',
    },
    {
      title: 'Run',
      body: 'A default run makes three passes and takes about three minutes.',
      code: 'whichdns --top 10',
    },
  ],
}
