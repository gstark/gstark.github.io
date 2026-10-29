import type { ProjectPageContent } from '../data.ts'

export const tix: ProjectPageContent = {
  tagline: 'Private code tasks for coding agents, shared by every repository and every machine.',
  summary: [
    'Coding agents lose their task list when the session ends. A task file in the repository survives, but it shows up in pull requests, and it stays on one machine.',
    '`tix` keeps the tasks in a Convex deployment that you own. It finds the project from the `origin` remote, so each repository gets its own tree of tasks and subtasks. Nothing is written into the repository. The same tasks show on every machine, from the CLI, from the MCP server, and from the Claude Code skills.',
  ],
  status: 'Personal project, early',
  license: 'MIT',
  note: 'A personal project that I built for my own agent work. It is inspired by dex, by David Cramer. It needs your own Convex deployment, and it has one user: you.',
  install: 'curl -fsSL https://raw.githubusercontent.com/gstark/tix/main/install.sh | bash',
  media: [
    {
      kind: 'video',
      src: '/media/tix/tasks.mp4',
      poster: '/media/tix/tree.webp',
      alt: 'tix makes a task with two subtasks, blocks the second subtask on the first, and shows the tree. tix list --ready hides the blocked subtask. tix done closes the first subtask with a result and the HEAD commit, and tix show prints the parent with one subtask done.',
      width: 1200,
      height: 640,
    },
  ],
  example: {
    file: 'terminal',
    code: `$ tix create "Add token refresh" -d "Refresh the JWT before it expires"
k3v9qd2m
$ tix create "Write the refresh endpoint" --parent k3v9qd2m
p7xw1c8e
$ tix
[ ] k3v9qd2m: Add token refresh
└── [ ] p7xw1c8e: Write the refresh endpoint
$ tix done p7xw1c8e -r "Added POST /refresh. pnpm test: 52 passed." --commit HEAD`,
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
      body: 'Tasks nest three levels deep. `tix block` makes one task wait for another, and `tix list --ready` shows only the tasks that can start now.',
    },
    {
      group: 'Tasks',
      title: 'Plans become tasks',
      body: '`tix plan plan.md` makes a task from a markdown plan. The first heading is the name, and the file is the description.',
    },
    {
      group: 'Tasks',
      title: 'Server-side rules',
      body: 'Convex mutations enforce the rules: a parent cannot close while a subtask is open, and a blocker cannot make a cycle.',
    },
    {
      group: 'Agents',
      title: 'MCP server',
      body: '`tix mcp` gives agents five tools on stdio: create, list, show, update, and blockers. A failed call returns an error, and the server keeps running.',
    },
    {
      group: 'Agents',
      title: 'Claude Code plugin',
      body: 'The plugin installs the MCP server and two skills. `tix` teaches the agent when to make a task and how to close it. `tix-plan` breaks a plan into subtasks.',
    },
    {
      group: 'Setup',
      title: 'Machine tokens',
      body: 'Each machine has its own token. Convex stores only a hash, and `just revoke` turns off one machine without the others.',
    },
    {
      group: 'Setup',
      title: 'No build',
      body: 'Node 24 runs the TypeScript source directly. The install links `src/index.ts` into `~/.local/bin`, and the same command updates it.',
    },
  ],
  steps: [
    {
      title: 'Install',
      body: 'It needs git, Node 24, and pnpm. If Claude Code is installed, the script also installs the plugin.',
      code: 'curl -fsSL https://raw.githubusercontent.com/gstark/tix/main/install.sh | bash',
    },
    {
      title: 'Deploy the backend',
      body: 'Run this one time, in a clone. `TIX_TEAM` is your Convex team slug. The recipe prints the production URL.',
      code: `git clone https://github.com/gstark/tix.git && cd tix
pnpm install
echo "TIX_TEAM=your-team" > .env
pnpm exec convex login
just setup`,
    },
    {
      title: 'Log in each machine',
      body: 'Make the token in the clone. Convex shows it one time.',
      code: `just token laptop
tix login --url https://your-deployment.convex.cloud --token tix_...`,
    },
  ],
}
