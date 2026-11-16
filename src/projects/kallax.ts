import type { ProjectPageContent } from '../data.ts'

export const kallax: ProjectPageContent = {
  tagline: 'Design printed storage for a KALLAX cube in your browser, and get a Bambu Studio project that is ready to slice.',
  summary: [
    'A cube of an IKEA KALLAX shelf is a good place for small parts, but a bare cube is one big bin. This project prints a box that slides into the cube, and parts trays that stack inside the box. Trays of 24, 32, 48, and 96 mm stack to the full 100 mm height, so a mix of shallow and deep trays fills the box with no wasted space.',
    'The workbench runs fully in the browser. OpenSCAD runs as WebAssembly in web workers, and the page writes the Bambu Studio project itself, with the printer, the filaments, and each part on its plate. Nothing goes to a server.',
    'Not sure what size of tray you need? Tell the workbench what you want to store: a few circuit boards, fifty wire connectors, a pile of screws. It finds the smallest trays that hold everything, and shows your items at true size in each compartment.',
  ],
  status: 'Personal project, in use',
  license: 'MIT',
  note: 'A personal project for organizing my own workshop. The tools write projects for a Bambu Lab P1S with a 0.4 mm nozzle. The OpenSCAD models also work with other printers. KALLAX is a trademark of Inter IKEA Systems B.V. This project is not affiliated with IKEA.',
  install: 'git clone https://github.com/gstark/kallax',
  site: { label: 'Open the workbench', url: 'https://gstark.com/kallax/' },
  media: [
    {
      kind: 'image',
      src: '/media/kallax/tray-top.webp',
      alt: 'The tray editor: a screw tray on a green cutting mat with a 10 mm grid, at true scale with dimension lines. Each compartment has a label, such as M3x6 and Washers, and two are merged into larger compartments for nuts and standoffs.',
      width: 2560,
      height: 1600,
    },
    {
      kind: 'image',
      src: '/media/kallax/tray-3d.webp',
      alt: 'The same tray in 3D on the build plate: the tray body with label rails, and the lid with a map of the compartment labels inlaid in a second color.',
      width: 2560,
      height: 1600,
    },
    {
      kind: 'image',
      src: '/media/kallax/find-items.webp',
      alt: 'Find a tray: the item list with four RJ45 breakout boards and fifty loose WAGO connectors, shown at true size on the mat, and the question "Do you have another item to store?"',
      width: 2560,
      height: 1600,
    },
    {
      kind: 'image',
      src: '/media/kallax/find-3d.webp',
      alt: 'The proposed tray in 3D, with each board as a yellow block in its own compartment and the connectors as a pile in a long compartment. The lid map shows the item names.',
      width: 2560,
      height: 1600,
    },
    {
      kind: 'image',
      src: '/media/kallax/box-top.webp',
      alt: 'The box as a drawing: a top view with the 4 by 10 tray grid inside, and a front view with the finger cutout and dashed lines for the floor and the inside walls.',
      width: 2560,
      height: 1600,
    },
  ],
  features: [
    {
      group: 'Trays',
      title: 'A grid you can merge',
      body: 'Set the size and the number of units across and along. Drag across units, or hold Shift and press the arrow keys, to merge them into a larger compartment.',
    },
    {
      group: 'Trays',
      title: 'Labels in three places',
      body: 'Type a label for each compartment. It goes on a map inside the lid, on a slide-in label that sits in rails on the back wall, and on the plate of labels in the project.',
    },
    {
      group: 'Trays',
      title: 'Drawn at true scale',
      body: 'The top view draws the tray on a cutting mat with a 10 mm grid and drafting-style dimensions. The size of every compartment comes from the OpenSCAD model, not from a copy of its math.',
    },
    {
      group: 'Find a tray',
      title: 'An interview, one question at a time',
      body: 'Give each item a name, its size, and a count. Choose whether each one gets its own compartment or they all go loose into one. The items appear on the mat at true size as you answer.',
    },
    {
      group: 'Find a tray',
      title: 'A packer that knows the floor',
      body: 'Items ride up the rounded floor edges and the front scoop of each compartment, so the packer adds that lift to their height. Loose parts must fit by volume. The model checks each tray before the page shows it.',
    },
    {
      group: 'Find a tray',
      title: 'See it before you print it',
      body: 'Each proposed tray appears in 3D with your items as yellow blocks in their compartments. Open the one you like in the tray editor.',
    },
    {
      group: 'Box',
      title: 'A sandwich wall',
      body: 'The box prints with one perimeter on each face and gyroid infill between them. A thick hollow wall is stiffer than a thin solid wall of the same plastic. Each box carries these settings, so Bambu Studio keeps its system process preset.',
    },
    {
      group: 'Box',
      title: 'Your own size',
      body: 'Change the wall, the height, and the finger cutout. The inside stays 96 by 246 mm, so every tray still fits.',
    },
    {
      group: 'Everywhere',
      title: 'Projects ready to slice',
      body: 'Make 3MF writes a Bambu Studio project with the printer, the filaments, the plates, and the second color for text. The writer is a TypeScript port of bambu3mf.',
    },
    {
      group: 'Everywhere',
      title: '3D preview',
      body: 'A fast draft renders while you edit, and Make 3MF replaces it with the final parts. three.js loads only when you open the 3D view.',
    },
    {
      group: 'Everywhere',
      title: 'A command-line version',
      body: 'Python tools do the same work in a terminal: a tray editor, the item packer, and label plates. They use the same OpenSCAD models as the web.',
    },
  ],
  steps: [
    {
      title: 'Open the workbench',
      body: 'Click Open the workbench at the top of this page. Start with Box, Edit a tray, or Find a tray for my items.',
    },
    {
      title: 'Make the 3MF',
      body: 'Click Make 3MF. The page renders each part with OpenSCAD in the browser and downloads the Bambu Studio project.',
    },
    {
      title: 'Slice and print',
      body: 'Open the project in Bambu Studio. The printer, the filaments, and the plates are already set.',
    },
    {
      title: 'Run it yourself',
      body: 'To change the models or run the workbench on your own computer, clone the repository. The README covers the setup for the web and the command line.',
      code: `git clone https://github.com/gstark/kallax
cd kallax/web
pnpm install
pnpm libs
pnpm dev`,
    },
  ],
}
