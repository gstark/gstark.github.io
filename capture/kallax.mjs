// Screenshots of the Kallax workbench. It runs in the browser, so no setup is needed.
// The script builds a screw tray, finds a tray for a set of items, and shows the box.
// Each 3D view waits for OpenSCAD in the page, so the run takes about 2 minutes.
// Usage: node capture/kallax.mjs [base URL]
import { chromium } from 'playwright-core'

const base = process.argv[2] ?? 'https://gstark.com/kallax/'
const out = 'public/media/kallax'
const minute = 60_000

const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2, acceptDownloads: true })
page.on('download', (download) => download.cancel())   // Make 3MF downloads a file. Keep only the render.

const footer = page.locator('footer p').first()
const mode = (name) => page.getByRole('navigation', { name: 'Mode' }).getByRole('button', { name, exact: true }).click()
const view = (name) => page.getByRole('group', { name: 'View' }).getByRole('button', { name, exact: true }).click()
const button = (name) => page.getByRole('button', { name, exact: true }).click()
// The 3D view is ready when the pending text is gone and the canvas is there
const settled3d = async () => {
  await page.locator('main canvas').waitFor({ timeout: minute })
  await page.locator('main p.sr-only').waitFor({ state: 'detached', timeout: 2 * minute })
  await page.waitForTimeout(800)
}
const shot = (name) => page.screenshot({ path: `${out}/${name}.png` })
// Drag down on the 3D view to look from higher up, so the items show over the tall walls
const lookFromAbove = async () => {
  const box = await page.locator('main canvas').boundingBox()
  const x = box.x + box.width / 2, y = box.y + box.height / 2
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x, y + 230, { steps: 12 })
  await page.mouse.up()
  await page.waitForTimeout(500)
}

await page.goto(base, { waitUntil: 'networkidle' })
await footer.filter({ hasText: 'compartments' }).waitFor({ timeout: minute })

// A screw tray: a 3 x 4 grid with a tall compartment for nuts and a wide one for standoffs
await view('Top view')
const mat = page.locator('main svg[role=application]')
await mat.focus()
const keys = async (...names) => { for (const k of names) await page.keyboard.press(k) }
const label = async (text) => {
  await keys('Enter')
  await page.keyboard.type(text)
  await keys('Enter')
}
const requery = () => page.waitForTimeout(1200)   // the model measures the new grid

await keys('ArrowUp', 'ArrowUp', 'Shift+ArrowUp', 'm')   // column 0, rows 2 and 3
await requery()
await keys('ArrowRight', 'ArrowUp', 'Shift+ArrowRight', 'm')   // row 3, columns 1 and 2
await requery()
await keys('ArrowLeft', 'ArrowLeft', 'ArrowLeft', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown')   // front left
await label('M3x6')
await keys('ArrowRight'); await label('M2x4')
await keys('ArrowRight'); await label('M3x8')
await keys('ArrowUp'); await label('M3x16')
await keys('ArrowLeft'); await label('M3x12')
await keys('ArrowLeft'); await label('M3x10')
await keys('ArrowUp'); await label('M3 nuts')
await keys('ArrowRight'); await label('Washers')
await keys('ArrowRight'); await label('M4x10')
await keys('ArrowUp'); await label('Standoffs')
await page.getByLabel('Title on the outside').fill('Screws')
await mat.focus()
await keys('ArrowLeft')   // the cursor on the standoffs, so the yellow selection shows
await page.waitForTimeout(500)
await shot('tray-top')

// The final parts: Make 3MF renders them at full quality, and the 3D view shows them
await button('Make 3MF')
await page.locator('footer').filter({ hasText: 'Saved' }).waitFor({ timeout: 3 * minute })
await view('3D')
await settled3d()
await shot('tray-3d')

// Find a tray: four network breakout boards, each in its own compartment, and a pile of WAGO connectors
await mode('Find a tray for my items')
const answer = async (name, w, l, h, count, loose) => {
  await page.getByLabel('Name').fill(name)
  await button('Next')
  const sizes = page.locator('aside section').last().locator('input')
  await sizes.nth(0).fill(w)
  await sizes.nth(1).fill(l)
  await sizes.nth(2).fill(h)
  await button('Next')
  await page.getByLabel('Count').fill(count)
  await button('Next')
  await page.getByRole('button', { name: loose ? /All loose/ : /Each in its own/ }).click()
}
await answer('RJ45 2 port', '42', '38', '17', '4', false)
await button('Add another item')
await answer('WAGO 2', '12.4', '20.5', '14.5', '50', true)
await page.waitForTimeout(400)
await shot('find-items')

await button('No, find a tray')
await button('Find trays')
await page.getByRole('button', { name: 'Open in the editor' }).waitFor({ timeout: minute })
await settled3d()
await lookFromAbove()
await shot('find-3d')

// The box as a drawing: the top view with the tray grid, and the front view
await mode('Box')
await footer.filter({ hasText: 'inside' }).waitFor({ timeout: minute })
await view('Top view')
await page.waitForTimeout(500)
await shot('box-top')

await browser.close()
