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
      title: 'CPU meters',
      body: 'A per-core CPU meter in the menu bar. It is new code that replaces MenuMeters.',
    },
    {
      title: 'Proxmox panel',
      body: 'A panel that shows CPU use on a Proxmox host.',
    },
    {
      title: 'Unpushed commit warning',
      body: 'The menu bar warns when git commits have not been pushed.',
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
