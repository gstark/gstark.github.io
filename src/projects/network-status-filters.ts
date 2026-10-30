import type { ProjectPageContent } from '../data.ts'

export const networkStatusFilters: ProjectPageContent = {
  tagline: 'Filter the Chrome DevTools Network panel by HTTP status code.',
  summary: [
    'The Network panel has buttons for resource types, but none for status. To find the failed requests on a busy page, you type exact codes such as `status-code:404` into the filter box. This patch adds a row of status buttons next to the resource type buttons: 2xx, 3xx, 4xx, 5xx, and Custom.',
    'Custom takes an expression, such as `>=500` or `401,403`. The patch is about 170 lines in `NetworkLogView.ts`, with 16 tests.',
    'To use the patch in Helium every day, install Helium Dev from Homebrew. It is a small app that you set as the default browser. It opens Helium with the patched DevTools, so links from other apps get them too. The repository also has scripts that start Helium or Google Chrome with a local DevTools build.',
  ],
  status: 'Patch, not upstream',
  license: 'None yet',
  note: 'A personal patch to the Chromium DevTools frontend. It is not part of Chrome, and I have not sent it upstream yet. Helium Dev ships a DevTools build for Chromium 156, and it needs Helium 156 on an Apple silicon Mac with macOS 26.',
  install: 'brew install gstark/tap/helium-dev',
  upstream: { name: 'Chrome DevTools frontend', url: 'https://chromium.googlesource.com/devtools/devtools-frontend' },
  example: {
    file: 'Custom status filter',
    code: `404              one code
200-204          a range, also 200..204
>=500            a comparison: <, <=, >, >=, !=
401, 403, >=500  any of these`,
  },
  media: [
    {
      kind: 'image',
      src: '/media/network-status-filters/helium-custom-gt-299.webp',
      alt: 'The Network panel in Helium on reddit.com. The Custom button shows ">299", so the panel shows only the four 403 caption requests and one 307 redirect.',
      width: 2000,
      height: 364,
    },
    {
      kind: 'image',
      src: '/media/network-status-filters/after-all.webp',
      alt: 'The Network panel with the patch: after the resource type buttons, a second row has All, 2xx, 3xx, 4xx, 5xx, and Custom. All 10 requests show.',
      width: 1300,
      height: 440,
    },
    {
      kind: 'image',
      src: '/media/network-status-filters/after-4xx-5xx.webp',
      alt: '4xx and 5xx are selected. The panel shows 4 of 10 requests: 404, 418, 500, and 503.',
      width: 1300,
      height: 440,
    },
    {
      kind: 'image',
      src: '/media/network-status-filters/after-custom.webp',
      alt: 'The Custom button shows "200-204, 418". The panel shows 5 of 10 requests: the page and 200, 201, 204, and 418.',
      width: 1300,
      height: 440,
    },
  ],
  features: [
    {
      title: 'Status class buttons',
      body: '2xx, 3xx, 4xx, and 5xx sit after the resource type filters and work the same way. A click selects one class. Cmd+click, or Ctrl+click off the Mac, selects more than one.',
    },
    {
      title: 'Custom expressions',
      body: 'Codes, ranges, comparisons, and comma-separated lists of them. The Custom button shows the expression after you set it.',
    },
    {
      title: 'Classes and expressions together',
      body: 'Select 4xx and a Custom `>=500`, and a request shows if it matches either one.',
    },
    {
      title: 'Bad input stays out',
      body: 'An invalid expression turns the input red, and Enter does not apply it. An empty expression does not filter, and Custom turns off when you close the input.',
    },
    {
      title: 'Failed requests stay hidden',
      body: 'Blocked, failed, and unfinished requests have status 0. They never match a status filter.',
    },
    {
      title: 'Helium Dev',
      body: 'A default browser app that starts Helium with `--custom-devtools-frontend`. It declares the same URL schemes and file types as Helium. If Helium already runs with the stock DevTools, it asks to restart Helium.',
    },
    {
      title: 'Saved like other filters',
      body: 'The selected classes and the expression are DevTools settings, so they come back the next time you open DevTools.',
    },
  ],
  steps: [
    {
      title: 'Install Helium Dev',
      body: 'Helium must be in `/Applications`.',
      code: 'brew install gstark/tap/helium-dev',
    },
    {
      title: 'Make it the default browser',
      body: 'Open Helium Dev once. It asks to become the default browser, and macOS asks you to confirm. To ask again, run this command.',
      code: 'open -a "Helium Dev" --args --make-default',
    },
    {
      title: 'Or build DevTools yourself',
      body: 'DevTools builds with the Chromium depot_tools. The patch applies to the Chromium 156 DevTools that Helium uses.',
      code: `git clone https://github.com/gstark/chrome-devtools-network-status-filters.git
cd chrome-devtools-network-status-filters
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
export PATH="$PWD/depot_tools:$PATH"
mkdir devtools && cd devtools
fetch devtools-frontend
cd devtools-frontend
git checkout -b status-filters bf69d041
git am ../../status-filters.patch
gn gen out/Default
autoninja -C out/Default`,
    },
    {
      title: 'Start your browser',
      body: 'Run a script from the repository root. Each script quits the browser if it runs, then starts it with the local DevTools build.',
      code: `./launch-chrome.sh
./launch-helium.sh`,
    },
  ],
}
