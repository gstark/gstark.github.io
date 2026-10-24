import type { ProjectPageContent } from '../data.ts'

export const posterize: ProjectPageContent = {
  tagline: 'Turn flat-color art into a multi-color print for Bambu Studio.',
  summary: [
    'Give posterize a PNG with a few flat colors, such as a logo or a cartoon. It matches each color to a filament you own, traces each color into a vector outline, and builds a model: a solid base with each color raised on top. The output is a 3MF that Bambu Studio opens with the printer, filaments, and plates already set.',
    'Art larger than the bed gets split into a grid of plates. posterize can move the seams to cut fewer pieces, drills dowel holes so the pieces line up, and adds keyholes to hang the finished piece on a wall.',
  ],
  status: 'v0.1, unreleased',
  note: 'A personal project for printing large wall art. It is not on PyPI yet, so you install it from GitHub. It needs Python 3.14 or later, OpenSCAD, and potrace.',
  license: 'MIT',
  install: 'uv tool install git+https://github.com/gstark/posterize',
  example: {
    file: 'A 240 mm badge split across two 180 mm plates',
    code: `$ posterize badge.png --width 240 --plate-size 180 --max-filaments 3
Selecting best 3 filaments for badge.png...
  Selected colors:
    #F5F5F0 → Bambu PLA Matte Ivory White #FFFFFF (ΔE=3.3; avg ΔE=3.3)
    #DC2828 → Bambu PLA Scarlet Red #DE4343 (ΔE=5.4; avg ΔE=5.4)
    #1E5AC8 → Bambu PLA Matte Marine Blue #0078BF (ΔE=12.4; avg ΔE=12.4)
Generating masks...
  Using opaque pixels as base mask
Vectorizing masks...
  Generated build/model.scad

Target width: 240.0 mm, plate size: 180 mm
Model: 240 x 144 mm
Plates: 2 x 1 = 2

  Plate r1_c1... done
  Plate r1_c2... done

Wrote output/badge.3mf (2 plate(s))
Wrote output/badge-dowel.3mf (1 dowel)
Open in Bambu Studio.`,
  },
  features: [
    {
      title: 'Filament matching',
      body: 'posterize compares each image color to your filament library with CIEDE2000, a color distance that follows how people see color, and keeps the `--max-filaments` best matches. `--optimal-filament-colors` lists the image colors worth buying as filament instead.',
    },
    {
      title: 'Traced outlines',
      body: 'potrace turns each color mask into an SVG outline, and OpenSCAD extrudes it. Edges come out smooth, not stair-stepped pixels.',
    },
    {
      title: 'Plates for large art',
      body: 'Set `--plate-size` and posterize cuts the model into a grid and puts each cell on its own Bambu Studio plate. `--per-plate-palette` picks filaments for each plate on its own, so one large piece can use more colors than your printer holds.',
    },
    {
      title: 'Fewer, larger pieces',
      body: '`--optimize-plate-offset` pads the image with transparent pixels to move the seams. It counts the connected pieces that come off the printer and picks the offset with the fewest pieces and the fewest small slivers.',
    },
    {
      title: 'Dowel holes',
      body: 'Plates get 6 mm holes on shared edges, and a second 3MF holds a ribbed dowel to print. posterize skips a hole where the art is too thin to leave a 2 mm wall around it.',
    },
    {
      title: 'Wall mounting',
      body: '`--wall` cuts keyholes into the back of the top plates at 16-inch stud spacing. `--keyhole-offset` shifts them off a seam.',
    },
    {
      title: 'Wizard and config',
      body: 'Run `posterize` with no arguments for a terminal wizard that previews the plates in your filament colors. `posterize config` saves your defaults and manages the filament library.',
    },
  ],
  steps: [
    {
      title: 'Install the tools',
      body: 'posterize calls OpenSCAD and potrace. Put both on your `PATH`, or set `POSTERIZE_OPENSCAD` and `POSTERIZE_POTRACE`.',
      code: `brew install potrace
brew install --cask openscad
uv tool install git+https://github.com/gstark/posterize`,
    },
    {
      title: 'Set up your filaments',
      body: 'Open the Filaments section, start from the sample list, and remove the filaments you do not own.',
      code: 'posterize config',
    },
    {
      title: 'Convert an image',
      body: 'Pass the PNG and a size. Leave out the arguments to use the wizard.',
      code: 'posterize art.png --width 500 --plate-size 250 --wall',
    },
    {
      title: 'Open it in Bambu Studio',
      body: 'The 3MF files are in `output/`. Slice and print each plate.',
    },
  ],
}
