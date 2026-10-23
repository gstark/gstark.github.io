import type { ProjectPageContent } from '../data.ts'

export const networkStatusFilters: ProjectPageContent = {
  tagline: 'Filter the Chrome DevTools Network panel by HTTP status code.',
  summary: [
    'The Network panel has buttons for resource types, but none for status. To find the failed requests on a busy page, you type exact codes such as `status-code:404` into the filter box. This patch adds a row of status buttons next to the resource type buttons: 2xx, 3xx, 4xx, 5xx, and Custom.',
    'Custom takes an expression, such as `>=500` or `401,403`. The patch is about 170 lines in `NetworkLogView.ts`, with 16 tests. The repository also has scripts that start Helium or Google Chrome with the patched DevTools build.',
  ],
  status: 'Patch, not upstream',
  license: 'None yet',
  note: 'A personal patch to the Chromium DevTools frontend. It is not part of Chrome, and I have not sent it upstream yet. To use it, you build DevTools from source and start your browser with `--custom-devtools-frontend`.',
  install: 'git clone https://github.com/gstark/chrome-devtools-network-status-filters.git',
  upstream: { name: 'Chrome DevTools frontend', url: 'https://chromium.googlesource.com/devtools/devtools-frontend' },
  example: {
    file: 'Custom status filter',
    code: `404              one code
200-204          a range, also 200..204
>=500            a comparison: <, <=, >, >=, !=
401, 403, >=500  any of these`,
  },
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
      title: 'Saved like other filters',
      body: 'The selected classes and the expression are DevTools settings, so they come back the next time you open DevTools.',
    },
  ],
  steps: [
    {
      title: 'Clone the repository and depot_tools',
      body: 'DevTools builds with the Chromium depot_tools. The repository ignores the depot_tools folder.',
      code: `git clone https://github.com/gstark/chrome-devtools-network-status-filters.git
cd chrome-devtools-network-status-filters
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
export PATH="$PWD/depot_tools:$PATH"`,
    },
    {
      title: 'Fetch and patch DevTools',
      code: `mkdir devtools && cd devtools
fetch devtools-frontend
cd devtools-frontend
git am ../../status-filters.patch`,
    },
    {
      title: 'Build it',
      code: `gn gen out/Default
autoninja -C out/Default`,
    },
    {
      title: 'Start your browser',
      body: 'Each script quits the browser if it runs, then starts it with the local DevTools build.',
      code: `./launch-chrome.sh
./launch-helium.sh`,
    },
  ],
}
