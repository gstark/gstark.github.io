import type { ProjectPageContent } from '../data.ts'

export const perch: ProjectPageContent = {
  tagline: 'My macOS menu bar, cut down from Tinycast and rebuilt for one Mac.',
  summary: [
    'Perch is my personal macOS menu bar app. It has a fuzzy app launcher, global hotkeys, clipboard history, an inline calculator with unit conversion, an emoji picker, and window management.',
    'It started from Tinycast on 2026-10-05. Most of Tinycast\'s features are gone, and Perch adds a few things of its own.',
  ],
  status: 'Personal fork, no releases',
  note: 'Perch is a personal fork of Tinycast by Abue Ammar. It is not the official Tinycast app and is not affiliated with that project. There are no releases and no support, and Perch does not accept issues or pull requests. For the full app, use Tinycast.',
  license: 'AGPL-3.0',
  install: 'git clone https://github.com/gstark/perch.git && cd perch && just install',
  upstream: { name: 'Tinycast', url: 'https://github.com/abue-ammar/tinycast' },
  media: [
    {
      kind: 'image',
      src: '/media/perch/launcher.webp',
      alt: 'The Perch palette with the query "saf". Safari is the first result, with Open Application on Return and Actions on Command-K.',
      width: 1800,
      height: 1140,
    },
    {
      kind: 'image',
      src: '/media/perch/calculator.webp',
      alt: 'The palette converts "12.5 km in miles" inline: 12.5 kilometers is 7.767139903 miles.',
      width: 1800,
      height: 1140,
    },
    {
      kind: 'image',
      src: '/media/perch/emoji.webp',
      alt: 'The emoji picker with the query "rocket". The rocket emoji is selected, followed by astronauts and matching symbols.',
      width: 1800,
      height: 1140,
    },
  ],
  highlights: {
    heading: 'Added in Perch',
    items: [
      {
        title: 'Disk history',
        body: 'Perch records the startup disk once an hour to a CSV file. The menu shows free space now and the change this week. The window charts free space, used space, or the change per interval, over a day, a week, a month, a year, or all of the history.',
        media: {
          kind: 'image',
          src: '/media/perch/disk-history.webp',
          alt: 'The Disk History window: 31.33 GB free of 994.66 GB, from 122 hourly samples. A line chart shows free space for the past week.',
          width: 1240,
          height: 1040,
        },
      },
      {
        title: 'Git Watch',
        body: 'Git Watch looks for default branches with commits that are not pushed. It scans folders on this Mac, and on other machines over SSH, every 10 minutes and after the Mac wakes. A count appears next to the CPU meter. The window can push a branch, show the repository in Finder, or ignore it.',
        media: {
          kind: 'image',
          src: '/media/perch/git-watch.webp',
          alt: 'The Git Watch window: 2 repos to push. shadcn-spike was never pushed, and infrastructure is 1 commit ahead. Each row has Finder, Push, and Ignore buttons.',
          width: 1120,
          height: 522,
        },
      },
      {
        title: 'Proxmox panel',
        body: 'The panel shows the CPU use of a Proxmox host and the share each VM and container takes. Perch keeps the API token in the Keychain. A host with a self-signed certificate works after you compare its fingerprint and pin it.',
        media: {
          kind: 'image',
          src: '/media/perch/proxmox.webp',
          alt: 'The Proxmox window: host CPU at 4% on 16 cores, then each guest container and VM with its share of the host CPU.',
          width: 880,
          height: 1040,
        },
      },
      {
        title: 'AI process labels',
        body: 'The CPU menu names a busy process by its executable, and `node` or `corespotlightd` alone says little. When a process stays in the top 10 for 5 seconds, Perch reads its path, arguments, working directory, and parent, and asks an OpenAI-compatible chat service what it does. The answer appears in grey after the name. Apps such as Siri already have a clear name, so Perch skips them. Before the request goes out, Perch hides tokens, passwords, long hashes, and URL credentials, and replaces ports and pids with `#`. It caches labels by that redacted text, so two dev servers on different ports in the same folder cost one request. The endpoint can be OpenAI, OpenRouter, or a local Ollama.',
        media: {
          kind: 'image',
          src: '/media/perch/process-labels.webp',
          alt: 'The CPU menu under Top Processes: Siri at 94%, corespotlightd labelled "Spotlight indexing" at 17%, and process 51140 labelled "System Settings helper agent" at 15%.',
          width: 750,
          height: 294,
        },
      },
    ],
  },
  features: [
    {
      title: 'Launcher and hotkeys',
      body: 'A fuzzy app launcher with global hotkeys. The same panel does math and unit conversion inline.',
    },
    {
      title: 'Clipboard history',
      body: 'Earlier clipboard entries stay available. An emoji picker lives in the same app.',
    },
    {
      title: 'Window management',
      body: 'Launcher commands move and resize the front window. They can cycle through sizes, and you can add custom sizes.',
    },
    {
      title: 'CPU meter',
      body: 'Not in Tinycast. A bar for each core in the menu bar, with efficiency cores drawn dimmer. The menu lists the top processes and can quit them. It takes its design from MenuMeters but is new code.',
    },
    {
      title: 'Close to upstream',
      body: 'The source folder and many type names still say Tinycast, so upstream fixes cherry-pick onto the same paths.',
    },
  ],
  steps: [
    {
      title: 'Build and install',
      body: 'Perch needs macOS 26 or later and Xcode 26. If you fork it, the fork is yours to maintain.',
      code: `git clone https://github.com/gstark/perch.git && cd perch
just install`,
    },
  ],
}
