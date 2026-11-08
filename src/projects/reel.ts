import type { ProjectPageContent } from '../data.ts'

export const reel: ProjectPageContent = {
  tagline: 'A video player for the videos I open from Finder, with exact frame numbers, frame scrubbing, and frame copy.',
  summary: [
    'Most of the videos I open are screen recordings of UI work. I double-click a file in Finder, or run `open recording.mp4`, find the moment that matters, and pause. Then I need the frames around that pause, for a bug report or a design review. IINA plays everything, but it has playlists, a library, and controls that cover the video, and it has no quick way to get those frames.',
    'Reel uses libmpv, the engine behind IINA, so it plays the same codecs. It does only what I need. The window opens at the size of the video. The title bar and the controls never cover the video. When playback is paused, a strip of frames shows under the controls with the frame number, and one key copies that frame and the 5 frames on each side to the clipboard.',
    'Later I added the tools that video editors use for frame-accurate work: precision scrubbing, J, K, and L, In and Out marks, and an export of the part between the marks.',
  ],
  status: 'Personal project, early',
  license: 'MIT',
  note: 'Reel links mpv and FFmpeg statically from the MPVKit package. Those libraries stay under the LGPL. The screenshots show Big Buck Bunny, (c) copyright 2008 Blender Foundation, www.bigbuckbunny.org, under CC BY 3.0.',
  install: 'brew install gstark/tap/reel',
  media: [
    {
      kind: 'image',
      src: '/media/reel/player.webp',
      alt: 'Reel paused on a Big Buck Bunny frame, from an earlier version. The title bar sits above the video and the control bar below it. The control bar shows "Frame 640 of 1800" and "0:10.650 / 0:30".',
      width: 3840,
      height: 2312,
    },
  ],
  highlights: {
    heading: 'Frames around a pause',
    items: [
      {
        title: 'Copy frames',
        body: 'Command+C copies the paused frame. Shift+Command+C copies it with the 5 frames on each side. Each frame is a full-resolution PNG with the frame number in its file name. Finder pastes the files, and Slack, Figma, and Preview paste the images. A hidden second mpv instance steps through the frames, so the player keeps its position. The frame numbers are exact for MP4 and MOV files, also for screen recordings with a variable frame rate.',
        media: {
          kind: 'image',
          src: '/media/reel/frames.webp',
          alt: 'A Finder window with the 11 PNG files from one Shift+Command+C, big-buck-bunny-f00635.png to big-buck-bunny-f00645.png. The paused frame was 640.',
          width: 2400,
          height: 1320,
        },
      },
    ],
  },
  features: [
    {
      group: 'Scrubbing',
      title: 'Frame strip',
      body: 'When playback pauses, the window grows down and shows a row of frames under the controls. Hover a frame to see it, click to go to it, or drag and scroll to step one frame at a time. An orange tick marks each frame where the picture changes, and ⌥, and ⌥. jump to those frames.',
    },
    {
      group: 'Scrubbing',
      title: 'Precision scrubbing',
      body: 'Drag the playhead, then move the pointer away from the bar. The speed drops to half, a quarter, and then a fraction of a frame per point.',
    },
    {
      group: 'Scrubbing',
      title: 'J, K, and L',
      body: 'L plays forward and J plays backward, doubling the speed with each press up to 16×. K stops. Hold K and tap J or L to step one frame.',
    },
    {
      group: 'Scrubbing',
      title: 'In and Out marks',
      body: 'I and O set the marks, and playback loops between them. ⌥⌘C copies every frame in the range. B sets a bookmark, and ⇧B plays from it again and again.',
    },
    {
      group: 'Export',
      title: 'Export a clip',
      body: '⌘E saves the part between In and Out as a new file. It copies the samples without re-encoding, so it is fast and keeps the quality. It works for MP4 and MOV files.',
    },
    {
      group: 'Export',
      title: 'Export PNG frames',
      body: '⇧⌘E saves each frame of the range as a PNG file. Every file name has the prefix and a zero-padded frame number, so the names sort in order.',
    },
    {
      group: 'Export',
      title: 'Export to an SSH server',
      body: 'An export can go to a folder on an SSH server. You can browse the remote folders and make a new one, and the upload shows its progress.',
    },
    {
      group: 'Export',
      title: 'Toast when done',
      body: 'A finished export shows its first frame, the file name, and the folder, with a button to show it in Finder.',
    },
    {
      group: 'Export',
      title: 'Copy the time code',
      body: 'Right-click the scrubber or a strip frame to copy its time code, its frame number, or both, such as "36:36.166 (frame 65886)". The same menu sets In and Out at that frame.',
    },
    {
      group: 'Player',
      title: 'Sized to the video',
      body: 'The window opens at the size of the video, and a large video scales down to fit the screen. Resizes keep the aspect ratio. A double-click on the title bar fills the screen, and a second double-click goes back.',
    },
    {
      group: 'Player',
      title: 'Nothing covers the video',
      body: 'The title bar sits above the video and the control bar below it. They are always visible.',
    },
    {
      group: 'Player',
      title: 'Quick seek and frame steps',
      body: 'The arrow keys skip 5 seconds, and with Shift, 30 seconds. Comma and period step one frame back or forward. The control bar has a button for each of these.',
    },
    {
      group: 'Player',
      title: 'Display color',
      body: 'mpv gets the ICC profile of the display, as in IINA. The profile changes when the window moves to another screen.',
    },
    {
      group: 'Install',
      title: 'Default app for video',
      body: '`just install` makes Reel the default app for 62 video file extensions. It leaves out `.ts` and `.mts`, because TypeScript uses them. macOS asks you to confirm each change, so a reinstall changes only the types that do not open in Reel yet, and it asks nothing.',
    },
    {
      group: 'Install',
      title: 'No dylibs from other apps',
      body: 'mpv and FFmpeg come from MPVKit as static libraries, so the app does not need IINA or Homebrew. `just update-dependencies` moves to the newest MPVKit release.',
    },
  ],
  steps: [
    {
      title: 'Install',
      body: 'Reel needs an Apple silicon Mac with macOS 14 or later. To build it, clone the repository and run `just install` with Xcode, XcodeGen, and just. That build also makes Reel the default app for video.',
      code: 'brew install gstark/tap/reel',
    },
    {
      title: 'Open a video',
      body: 'Double-click a video in Finder, or open it from the terminal.',
      code: 'open recording.mp4',
    },
  ],
}
