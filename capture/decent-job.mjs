// Screenshots of the decent_job dashboard. Run the example app first (see capture/README.md).
// Usage: node capture/decent-job.mjs [base URL]
import { hostname } from 'node:os'
import { chromium } from 'playwright-core'

const base = process.argv[2] ?? 'http://127.0.0.1:7002'
const out = 'public/media/decent_job'
const pages = [
  ['overview', '/'],
  ['jobs', '/jobs'],
  ['performance', '/performance'],
]

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 })
for (const [name, path] of pages) {
  await page.goto(base + path, { waitUntil: 'networkidle' })
  // The Workers panel shows the machine name. Replace it with a neutral one.
  await page.evaluate((host) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    while (walker.nextNode()) {
      const node = walker.currentNode
      if (node.nodeValue?.includes(host)) node.nodeValue = node.nodeValue.replaceAll(host, 'worker-1.local')
    }
  }, hostname())
  await page.screenshot({ path: `${out}/${name}.png` })
}
await browser.close()
