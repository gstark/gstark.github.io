import type { ProjectPageContent } from '../data.ts'

export const riffle: ProjectPageContent = {
  tagline: 'Back up a Gmail mailbox to your own AWS account, then search it in plain English from the menu bar.',
  summary: [
    'Riffle copies every message in a Google Workspace mailbox to an S3 bucket that you own. A Lambda function checks Gmail every 5 minutes for new messages, label changes, and deletions. A message deleted in Gmail stays in the archive.',
    'An indexer puts each message into a LanceDB table on S3, with full text and Titan embeddings. A search runs both and merges the results. You type something like "receipts from Delta last spring", Claude turns it into filters, and the Riffle menu bar app shows those filters as a sentence you can edit.',
  ],
  status: 'Personal project, early',
  license: 'None yet',
  note: 'A personal project that I built to back up my own mailbox. It runs in one AWS account, for one Google Workspace mailbox, and has a single commit so far. Expect to read the OpenTofu files before you apply them.',
  install: 'git clone https://github.com/gstark/riffle.git && cd riffle && npm install',
  example: {
    file: 'search.sh',
    code: `curl -X POST "$(cd infra && tofu output -raw search_url)search" \\
  -H "Authorization: Bearer $(cat ~/.config/email-search/token)" \\
  -H "Content-Type: application/json" \\
  -d '{ "q": "receipts from Delta last spring", "limit": 5 }'`,
  },
  features: [
    {
      group: 'Backup',
      title: 'Your bucket, your keys',
      body: 'Raw messages go to S3 with a KMS key in your account. The bucket and the key have `prevent_destroy`, and every object version has Object Lock retention, 365 days by default.',
    },
    {
      group: 'Backup',
      title: 'A backfill you can restart',
      body: 'The first copy skips messages that are already in S3. Stop it, run it again, and it picks up where it was.',
    },
    {
      group: 'Backup',
      title: 'Sync every 5 minutes',
      body: 'A scheduled Lambda function copies new messages, label changes, and deletions from Gmail. Deletions are marked, and the raw message is kept.',
    },
    {
      group: 'Backup',
      title: 'Alerts when it stops',
      body: 'If the sync fails in 2 of 3 runs, or does not run for 30 minutes, you get an email.',
    },
    {
      group: 'Search',
      title: 'Keyword and meaning together',
      body: 'Each search runs a full text query and a vector query on the same LanceDB table, then merges them with reciprocal rank fusion.',
    },
    {
      group: 'Search',
      title: 'Plain English filters',
      body: 'Claude Opus 5.5 on Bedrock reads the search and returns sender, recipient, date range, labels, attachments, and sort order. If Claude fails, the search uses the plain text, so it still returns results.',
    },
    {
      group: 'Search',
      title: 'Exact filters skip Claude',
      body: 'The API also takes a `filters` object. A client that already knows the filters gets results without a model call.',
    },
    {
      group: 'Search',
      title: 'An index that keeps up',
      body: 'An indexer runs every minute from a queue. It reads the archive, extracts the text and attachment names, and embeds each message with Titan Text Embeddings v2.',
    },
    {
      group: 'Search',
      title: 'Bearer token auth',
      body: 'The search API is a Lambda function URL behind a bearer token. The check compares hashes, so its timing does not show the token length.',
    },
    {
      group: 'Menu bar app',
      title: 'One shortcut away',
      body: 'Press ⌥⌘E to open the search panel. Press ↓ to move to the results and Return to open the thread in Gmail.',
    },
    {
      group: 'Menu bar app',
      title: 'Filters as a sentence',
      body: 'The app shows what Claude read as a sentence of filters. Click a filter to change it, and the app searches again without Claude.',
    },
    {
      group: 'Menu bar app',
      title: 'Token in the Keychain',
      body: 'The app keeps the search URL in its preferences and the token in the Keychain.',
    },
  ],
  steps: [
    {
      title: 'Create the state bucket',
      body: 'Run this one time for each AWS account. It writes `infra/backend.hcl`. You need Node 24, OpenTofu 1.10, and AWS credentials.',
      code: `cd infra/bootstrap
tofu init
tofu apply`,
    },
    {
      title: 'Apply the main stack',
      body: 'Copy `infra/terraform.tfvars.example` to `infra/terraform.tfvars`, then set the mailbox and the alert address.',
      code: `npm run build:lambda
cd infra
tofu init -backend-config=backend.hcl
tofu apply`,
    },
    {
      title: 'Back up the mailbox',
      body: 'Store the Google service account key in Secrets Manager first. The account needs domain-wide delegation with the Gmail read-only scope.',
      code: `ARCHIVE_BUCKET=$(cd infra && tofu output -raw archive_bucket) \\
GMAIL_USER=you@example.com \\
GOOGLE_SECRET_ID=email-backup/google-service-account \\
AWS_REGION=us-east-2 \\
node src/sync/run-backfill.ts`,
    },
    {
      title: 'Install the menu bar app',
      body: 'It needs macOS 26, Xcode 26, XcodeGen, and just. On first start, enter the `search_url` output and the token from `~/.config/email-search/token`.',
      code: 'just riffle',
    },
  ],
}
