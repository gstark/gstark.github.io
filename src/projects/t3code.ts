import type { ProjectPageContent } from '../data.ts'

export const t3code: ProjectPageContent = {
  tagline: 'My fork of T3 Code. It lands worktrees, runs justfile recipes, watches remote servers, and makes long threads easier to read.',
  summary: [
    'T3 Code is an open source app from pingdotgg for running coding agents such as Claude Code, Codex, and Cursor. It runs on the desktop, on the web, and on a phone. This fork holds the changes I made for my own work, and it builds as G$ Code.',
    'Most of the changes are about finishing work. A thread in a worktree can sync its branch, land it, clean up after itself, and tell the agent what Git did. The rest make long threads easier to read and remote servers easier to watch.',
  ],
  status: 'Personal fork, 29 open PRs',
  note: 'A personal fork of T3 Code. It is not the official app. The `mine` branch has about 60 commits on top of upstream. 29 of them are open as pull requests, each on its own base, so you can read each one by itself. Claude Code wrote most of them, and the later ones ran through T3 Code itself.',
  license: 'MIT',
  install: 'brew install --cask gstark/tap/t3-code-mine',
  upstream: { name: 'T3 Code', url: 'https://github.com/pingdotgg/t3code' },
  example: {
    file: 'justfile',
    code: `# Runs in each new worktree that T3 Code creates.
worktree:
    vp i

# Runs when T3 Code lands the worktree, before it removes it.
worktree-complete:
    docker compose down`,
  },
  features: [
    { group: 'Git and worktrees', title: 'Land a worktree', body: 'Land merges the worktree branch into its base branch, then removes the worktree and the branch. It is the default Git action for a worktree thread. It does not push, but the toast has a Push button.', prs: [4], video: '/media/t3code/land-worktree.mp4' },
    { group: 'Git and worktrees', title: 'Land from any checkout', body: 'The main checkout can stay on any branch. If no checkout has the base branch, landing moves the branch forward. If one does, landing updates it, and refuses when it has uncommitted changes.', prs: [24], video: '/media/t3code/land-any-checkout.mp4' },
    { group: 'Git and worktrees', title: 'Push without stale branches', body: 'Before a push or a PR, the server fetches, then rebases onto the upstream branch and the default branch. A rebased branch pushes with `--force-with-lease`.', prs: [19], video: '/media/t3code/push-sync.mp4' },
    { group: 'Git and worktrees', title: 'The agent finishes the rebase', body: 'When a rebase stops on conflicts, it stays in progress. The thread\'s agent gets a message that asks it to finish.', prs: [19], video: '/media/t3code/agent-finishes-rebase.mp4' },
    { group: 'Git and worktrees', title: 'Git actions in the thread', body: 'Commits, pushes, PRs, and landings show as timeline cards that you can expand. The agent reads them at the start of its next turn.', prs: [3, 19], video: '/media/t3code/land-worktree.mp4' },
    { group: 'Git and worktrees', title: 'Commit only, or commit and push', body: 'Make either one the default for the Git button. The choice is saved for each project.', prs: [2], video: '/media/t3code/commit-only.mp4' },
    { group: 'Git and worktrees', title: 'Errors that say what went wrong', body: 'A failed Git action names the cause, such as a rejected push or no network. The server matches known errors and never forwards raw stderr.', prs: [5], video: '/media/t3code/git-errors.mp4' },
    { group: 'Git and worktrees', title: 'Worktrees from the command palette', body: 'Project rows get a worktree button. Hold Shift to switch each row to its worktree action, and Shift+Enter runs it.', prs: [1], video: '/media/t3code/palette-worktree.mp4' },
    { group: 'Justfile recipes', title: 'Recipes in the actions menu', body: 'Public recipes from the root justfile show in the thread details menu and run in the terminal drawer. A recipe that takes arguments is typed but not run, so you can add them.', prs: [6, 22], video: '/media/t3code/justfile-recipes.mp4' },
    { group: 'Justfile recipes', title: 'Set up each new worktree', body: 'A public `worktree` recipe with no arguments runs in each new worktree, after the project setup action.', prs: [7], video: '/media/t3code/justfile-worktree.mp4' },
    { group: 'Justfile recipes', title: 'Clean up when it lands', body: '`just worktree-complete` runs after the merge and before the worktree goes away. If it fails, the worktree stays, so you can fix it and land again.', prs: [20], video: '/media/t3code/justfile-worktree.mp4' },
    { group: 'Timeline and work log', title: 'Collapse history', body: 'Fold everything since the last collapse into one row, and the model writes a one-line summary. Click the row to look inside. The agent still sees all of it.', prs: [21, 29], video: '/media/t3code/collapse-history.mp4' },
    { group: 'Timeline and work log', title: 'Commands labeled with their reason', body: 'Claude, OpenCode, and ACP agents say why they run each command, and the work log uses that as the label. Codex sends no reason, so its label lists every program in the chain.', prs: [8], video: '/media/t3code/command-reason.mp4' },
    { group: 'Timeline and work log', title: 'How long things took', body: 'Commands, tool calls, and thinking show their duration, such as `850ms` or `1m 3s`.', prs: [27], video: '/media/t3code/work-log.mp4' },
    { group: 'Timeline and work log', title: 'One row per tool call', body: 'Turn off the "Group tool calls" setting to see each call as its own row.', prs: [9], video: '/media/t3code/work-log.mp4' },
    { group: 'Timeline and work log', title: 'Full tool details', body: 'Expanded details have no height limit. When they open below the fold, they scroll into view.', prs: [10], video: '/media/t3code/work-log.mp4' },
    { group: 'Timeline and work log', title: 'Minimap previews', body: 'Hover a minimap mark to see when it happened and how full the context was at the end of that turn.', video: '/media/t3code/minimap-preview.mp4' },
    { group: 'Timeline and work log', title: 'Click to copy inline code', body: 'Click a path or command in a message to copy it. A drag that selects text does not copy.', prs: [11], video: '/media/t3code/inline-code-and-diff.mp4' },
    { group: 'Timeline and work log', title: 'Diffs like VS Code', body: 'Diffs use the Dark+ and Light+ themes, `+` and `-` markers, and stronger colors for changed lines and words.', prs: [23], video: '/media/t3code/inline-code-and-diff.mp4' },
    { group: 'Composer', title: 'Context use you can read', body: 'The active composer shows a four-segment bar and a count such as `12% · 117k/1m`. It turns amber at 75% and red above 90%. Turn it on with "Context window indicator (legacy)" in Settings > General > Legacy features.', prs: [16], video: '/media/t3code/context-meter.mp4' },
    { group: 'Composer', title: 'Why compaction is off', body: 'When you cannot compact, the popover gives the reason, such as "Answer the pending approval before compacting".', prs: [17], video: '/media/t3code/compaction-reason.mp4' },
    { group: 'Composer', title: 'macOS Dictation', body: 'In the desktop app, the composer microphone starts macOS Dictation. You can bind `composer.dictate` to a key.', prs: [12] },
    { group: 'Composer', title: 'List markers that fit', body: 'Ordered list markers such as `10.` stay inside the gutter, also in monospace fonts.', prs: [26], video: '/media/t3code/list-markers.mp4' },
    { group: 'Remote servers', title: 'Server health', body: 'A thread on a remote environment shows latency, CPU, load, and memory for the host and the T3 server. The summary turns amber or red when a value gets high.', prs: [28], video: '/media/t3code/server-health.mp4' },
    { group: 'Remote servers', title: 'Find running servers', body: 'Thread details list the servers that the workspace runs, with their addresses, page titles, and icons. Over SSH, it marks the addresses this device can reach.' },
    { group: 'Remote servers', title: 'A default environment per project', body: 'Pick where new threads start for each project. If that environment is offline, the command palette says so and lets you pick a checkout.', prs: [18], video: '/media/t3code/default-environment.mp4' },
    { group: 'Sidebar and reports', title: 'Work reports', body: 'A report thread reads the threads that settled since the last report and writes a report to a folder you pick. Its suggestions focus on where agents struggled.', prs: [14], video: '/media/t3code/work-report.mp4' },
    { group: 'Sidebar and reports', title: 'Find the open thread', body: 'The active thread row has a thin rail in the theme\'s primary color.', prs: [25], video: '/media/t3code/sidebar.mp4' },
    { group: 'Sidebar and reports', title: 'A new-thread row that stays put', body: 'The draft row holds the slot its thread gets after you send it, while the sidebar sorts.', prs: [13], video: '/media/t3code/sidebar.mp4' },
    { group: 'Builds and upkeep', title: 'G$ Code', body: 'The fork builds as G$ Code, with a gold icon, so you can tell it from the official app.' },
    { group: 'Builds and upkeep', title: 'Signed macOS releases', body: 'Each release is a signed DMG for Apple silicon, published to a Homebrew cask in `gstark/tap`.' },
    { group: 'Builds and upkeep', title: 'Linux servers', body: 'Releases include Linux x64 and arm64 CLI archives, and remote hosts download the server from the fork. `just remotes` updates them.' },
    { group: 'Builds and upkeep', title: 'Upstream merges', body: '`just merge-release` merges the newest upstream release. Claude resolves the conflicts, and the merge commits only after the typecheck passes.' },
  ],
  steps: [
    {
      title: 'Install the macOS app',
      body: 'The cask is for Apple silicon. It replaces the official `t3-code` cask, so uninstall that one first.',
      code: 'brew install --cask gstark/tap/t3-code-mine',
    },
    {
      title: 'Or run it on a Linux server',
      body: 'Each release on GitHub has `linux-x64` and `linux-arm64` CLI archives. A remote host that you add over SSH downloads its server from these releases.',
    },
    {
      title: 'Or build from source',
      body: 'Install Vite+ first with `curl -fsSL https://vite.plus | bash`. The changes live on the `mine` branch.',
      code: `git clone -b mine https://github.com/gstark/t3code.git && cd t3code
vp i
vp run dev`,
    },
  ],
}
