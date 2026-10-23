import type { ProjectPageContent } from '../data.ts'

export const shoebox: ProjectPageContent = {
  tagline: 'Back up iCloud Photos to a drive or S3, with Optimize Mac Storage still on.',
  summary: [
    'With "Optimize Mac Storage" on, most of your originals live only in iCloud. A copy of the Photos library folder misses them, and turning the setting off fills the disk.',
    'Shoebox reads the Photos database, copies the originals that are on the Mac, and downloads the rest one at a time. A menu bar app runs the backup on a schedule. A `shoebox` CLI runs the same backup and lets you look around the library.',
  ],
  status: 'Personal project, no releases',
  note: 'Shoebox started as a fork of darwin-photos by cleanexit0, a Go CLI. The idea of reading the Photos database and pulling cloud-only originals comes from that project. Shoebox is now a Swift rewrite that does not track upstream. There are no release builds, so you build it from source with Xcode.',
  license: 'MIT',
  install: 'git clone https://github.com/gstark/shoebox.git && cd shoebox && make install',
  upstream: { name: 'darwin-photos', url: 'https://github.com/cleanexit0/darwin-photos' },
  example: {
    file: 'backup.sh',
    code: `# What is in the library, and how much of it is only in iCloud
shoebox stats

# Back up everything to an external drive
shoebox backup /Volumes/External/photos-backup

# Or to S3, or an S3-compatible service
shoebox backup --s3-profile photos-backup s3://my-bucket/photos-backup`,
  },
  features: [
    {
      group: 'Backup',
      title: 'Cloud-only originals',
      body: 'PhotoKit downloads originals that are only in iCloud. For assets that PhotoKit cannot see, Shoebox falls back to the iCloud web API, with a sign-in window inside the app.',
    },
    {
      group: 'Backup',
      title: 'Drive or S3',
      body: 'Both destinations use the same layout, `<UUID>.<ext>` under a folder or prefix. Shoebox skips files that already exist and never deletes remote objects.',
    },
    {
      group: 'Backup',
      title: 'Skips broken assets',
      body: 'An asset that fails goes into `~/.shoebox/failures.db`, and later runs skip it. `--retry-failed` tries them again.',
    },
    {
      group: 'Backup',
      title: 'Works with darwin-photos backups',
      body: 'File names, S3 keys, and S3 metadata match darwin-photos. Point Shoebox at an existing backup and it copies only what is missing.',
    },
    {
      group: 'Menu bar app',
      title: 'Scheduled backups',
      body: 'Daily or weekly, inside a time window you pick. A backup also starts when the backup drive connects.',
    },
    {
      group: 'Menu bar app',
      title: 'Waits for the right conditions',
      body: 'A scheduled backup waits for the power adapter, the backup drive, and an allowed Wi-Fi network. It also waits while you are on a hotspot or in Low Data Mode. The menu says which condition it is waiting on.',
    },
    {
      group: 'Menu bar app',
      title: 'Run history',
      body: 'The app keeps a list of recent runs from both the app and the CLI, with a log for each run.',
    },
    {
      group: 'CLI',
      title: 'Look around the library',
      body: '`ls` filters by date, album, type, and cloud or local. `cat` shows the metadata for one photo, and `stats` shows counts and sizes.',
    },
    {
      group: 'CLI',
      title: 'Read-only database access',
      body: 'Shoebox opens a copy of `Photos.sqlite` and never writes to the original. A full library scan is one SQLite query.',
    },
  ],
  steps: [
    {
      title: 'Build and install',
      body: 'You need macOS 26, Xcode, XcodeGen, and an Apple Development signing certificate. The command installs the app in /Applications and links the CLI to ~/.local/bin/shoebox.',
      code: `git clone https://github.com/gstark/shoebox.git && cd shoebox
make install`,
    },
    {
      title: 'Grant access',
      body: 'Give Shoebox Full Disk Access in System Settings > Privacy & Security. The app asks for Photos access the first time it runs.',
    },
    {
      title: 'Run a backup',
      body: 'Pick a destination and a schedule in the menu bar app, or run the CLI.',
      code: 'shoebox backup /Volumes/External/photos-backup',
    },
  ],
}
