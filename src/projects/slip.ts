import type { ProjectPageContent } from '../data.ts'

export const slip: ProjectPageContent = {
  tagline: 'Private code tasks for coding agents, shared by every repository and every machine.',
  summary: [
    'Coding agents lose their task list when the session ends. A task file in the repository survives, but it shows up in pull requests, and it stays on one machine.',
    '`slip` keeps the tasks in a Convex deployment that you own. It finds the project from the `origin` remote, so each repository gets its own tree of tasks and subtasks. Nothing is written into the repository. The same tasks show on every machine, from the CLI, from the live board in the terminal, from the MCP server, and from the Claude Code skills.',
  ],
  status: 'Personal project, early',
  license: 'MIT',
  note: 'A personal project that I built for my own agent work. It was called tix before. It is inspired by dex, by David Cramer. It needs your own Convex deployment, and it has one user: you.',
  install: 'curl -fsSL https://raw.githubusercontent.com/gstark/slip/main/install.sh | bash',
  example: {
    file: 'terminal',
    code: `$ slip create "Add token refresh" -d "Refresh the JWT before it expires"
k3v9qd2m
$ slip create "Write the refresh endpoint" --parent k3v9qd2m
p7xw1c8e
$ slip
[ ] k3v9qd2m: Add token refresh
└── [ ] p7xw1c8e: Write the refresh endpoint
$ slip attach p7xw1c8e before.png after.png
$ slip done p7xw1c8e -r "Added POST /refresh. bun run test: 52 passed." --commit HEAD`,
  },
  features: [
    {
      group: 'Tasks',
      title: 'Tasks are tickets',
      body: 'A task has a name, a description, and a result. The result records what the agent did and how it checked the work, with the SHA, branch, and message of the commit.',
    },
    {
      group: 'Tasks',
      title: 'Trees and blockers',
      body: 'Tasks nest three levels deep. `slip block` makes one task wait for another, and `slip list --ready` shows only the tasks that can start now.',
    },
    {
      group: 'Tasks',
      title: 'Plans become tasks',
      body: '`slip plan plan.md` makes a task from a markdown plan. The first heading is the name, and the file is the description.',
    },
    {
      group: 'Tasks',
      title: 'Attachments',
      body: '`slip attach` puts files on a task, such as the screenshots an agent took to check its work. Convex file storage keeps them, up to 10 MB each, and a deleted task takes its files with it.',
    },
    {
      group: 'Tasks',
      title: 'Activity log',
      body: '`slip log` lists recent changes, newest first, for one task, the project, or all projects.',
    },
    {
      group: 'Tasks',
      title: 'Server-side rules',
      body: 'Convex mutations enforce the rules: a parent cannot close while a subtask is open, and a blocker cannot make a cycle.',
    },
    {
      group: 'Board',
      title: 'Live board',
      body: '`slip tui` shows the task tree on the left and the selected task on the right. Convex pushes each change at once, so you watch agents work. A status cell flips like a departures board when it changes.',
    },
    {
      group: 'Board',
      title: 'Markdown, images, and diagrams',
      body: 'The ticket pane renders the description and the result as Markdown. Image attachments draw with the kitty graphics protocol or sixel, and with block characters in other terminals. A Mermaid block draws as a diagram when it fits.',
    },
    {
      group: 'Board',
      title: 'Keys and mouse',
      body: 'Vim keys move the selection. One key starts, closes, or reopens a task, and `e` edits it. `/` finds tasks, `p` changes the project, and `?` shows all the keys. You can click rows and drag the split between the panes.',
    },
    {
      group: 'Agents',
      title: 'MCP server',
      body: '`slip mcp` gives agents six tools on stdio: create, list, show, update, blockers, and attachments. A failed call returns an error, and the server keeps running.',
    },
    {
      group: 'Agents',
      title: 'Claude Code plugin',
      body: 'The plugin installs the MCP server and two skills. `slip` teaches the agent when to make a task and how to close it. `slip-plan` breaks a plan into subtasks.',
    },
    {
      group: 'Setup',
      title: 'Machine tokens',
      body: 'Each machine has its own token. Convex stores only a hash, and `just revoke` turns off one machine without the others.',
    },
    {
      group: 'Setup',
      title: 'No build',
      body: 'Bun runs the TypeScript source directly. The install links `src/index.ts` into `~/.local/bin`, and the same command updates it.',
    },
  ],
  steps: [
    {
      title: 'Install',
      body: 'It needs git and Bun 1.4 or later. If Claude Code is installed, the script also installs the plugin.',
      code: 'curl -fsSL https://raw.githubusercontent.com/gstark/slip/main/install.sh | bash',
    },
    {
      title: 'Deploy the backend',
      body: 'Run this one time, in a clone. `SLIP_TEAM` is your Convex team slug. The recipe prints the production URL.',
      code: `git clone https://github.com/gstark/slip.git && cd slip
bun install
echo "SLIP_TEAM=your-team" > .env
bunx convex login
just setup`,
    },
    {
      title: 'Log in each machine',
      body: 'Make the token in the clone. Convex shows it one time.',
      code: `just token laptop
slip login --url https://your-deployment.convex.cloud --token slip_...`,
    },
  ],
}
