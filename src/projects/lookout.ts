import type { ProjectPageContent } from '../data.ts'

export const lookout: ProjectPageContent = {
  tagline: 'Turn a spare Android phone into a camera that coding agents can see through.',
  summary: [
    'A coding agent can build and flash firmware, but it cannot see the board. Lookout fixes that. The phone runs an MCP server on the local network, and Claude Code connects to it. Scripts can use the same features through a plain HTTP API.',
    'The agent can take a quick look, wait for the view to change, record 60 fps video and read an LED blink code from a brightness trace, or read the numbers on a meter display with on-device OCR. It can also talk to the person at the desk: show a question on the phone, ask them to center a part, or draw arrows on the preview to show where to act.',
    'In the film, Claude Code asks the person to center the STAT LED, records 6 seconds at 60 fps, reads the blink code, and finds the fault.',
  ],
  status: 'Personal project, in use',
  license: 'MIT',
  note: 'A personal project. You build the app from source and install it with adb. It needs Android 10 or later and a phone on the same network as your computer. Requests need a bearer token, and the server answers only on the local network.',
  install: 'git clone https://github.com/gstark/lookout',
  film: {
    kind: 'video',
    sound: true,
    src: '/media/lookout/demo.mp4',
    poster: '/media/lookout/demo-poster.webp',
    alt: 'An 84 second narrated film. Claude Code looks at a circuit board through a phone on an arm, asks the person to center the STAT LED, records it at 60 fps, and reads the blink code to find the fault.',
    width: 1920,
    height: 1080,
  },
  media: [
    {
      kind: 'image',
      src: '/media/lookout/phone-screens.webp',
      alt: 'Five phone screens: the live preview with a named region and the activity feed, a guide that shows the shot the agent wants, a recording countdown, a full-screen question, and Setup with a QR code and the claude mcp add command.',
      width: 2480,
      height: 1019,
    },
    {
      kind: 'image',
      src: '/media/lookout/guide-landscape.webp',
      alt: 'In landscape, the guide panel and the camera preview sit side by side.',
      width: 999,
      height: 516,
    },
  ],
  features: [
    {
      group: 'See',
      title: 'Look and capture',
      body: '`look` returns a fresh frame of about 1024 px with a labeled grid. `capture` takes a full-resolution still for small text, with lens, zoom, focus, and torch for that shot.',
    },
    {
      group: 'See',
      title: 'Named regions',
      body: '`roi` names a region from grid cells, or the person drags it on the phone. Later calls crop to it by name.',
    },
    {
      group: 'See',
      title: 'Read a display',
      body: '`read` runs OCR on the phone and returns text and numbers with units, such as `12.04 V`, as JSON. With `duration_ms` it logs the value over time as a table.',
    },
    {
      group: 'Wait and record',
      title: 'Wait, do not poll',
      body: '`wait_for` blocks until the view changes, something moves, the scene goes still, a value passes a limit, or the person taps Done.',
    },
    {
      group: 'Wait and record',
      title: 'Fast events',
      body: '`record` takes up to 60 seconds of video at 30 or 60 fps. `clip` reads it back as contact sheets, single frames, or a brightness trace for LED blink codes.',
    },
    {
      group: 'Wait and record',
      title: 'History and baselines',
      body: '`history` shows the last minutes as one contact sheet. `baseline` and `diff` compare the view with a saved reference frame.',
    },
    {
      group: 'Talk to the person',
      title: 'Say and ask',
      body: '`say` speaks a message. `ask` shows a full-screen question with buttons and returns the answer.',
    },
    {
      group: 'Talk to the person',
      title: 'Guide the shot',
      body: 'A `capture` or `record` call with `guide_text` shows the person the shot the agent wants. The agent takes it after the person taps Ready.',
    },
    {
      group: 'Talk to the person',
      title: 'Point at it',
      body: '`point` draws arrows, boxes, and labels over the phone preview, on grid cells or saved regions, to show the person where to act.',
    },
  ],
  steps: [
    {
      title: 'Build and install',
      body: 'Connect the phone with USB or wireless adb. Gradle needs JDK 21.',
      code: `git clone https://github.com/gstark/lookout
cd lookout
./gradlew :app:installDebug`,
    },
    {
      title: 'Open Lookout on the phone',
      body: 'Allow the camera. Turn off battery optimization when the checklist asks.',
    },
    {
      title: 'Connect Claude Code',
      body: 'Tap Setup on the phone, copy the `claude mcp add` command, and run it on your computer. Give the phone a DHCP reservation on your router, so its address does not change.',
    },
  ],
}
