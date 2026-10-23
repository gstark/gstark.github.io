import type { ProjectPageContent } from '../data.ts'

export const bambu3mf: ProjectPageContent = {
  tagline: 'Build Bambu Studio project files from Python.',
  summary: [
    'A plain 3MF file holds geometry and nothing else. Open one in Bambu Studio and you still have to pick the printer, load the filaments, color each part, and drag parts onto plates by hand.',
    'bambu3mf writes a 3MF that Bambu Studio opens as a finished project. Your script sets the printer preset, the filament slots and colors, the plates, and which extruder prints each STL. The file opens ready to slice.',
  ],
  status: 'v0.1, unreleased',
  note: 'A personal project for scripting my own prints. It is not on PyPI yet, so you install it from GitHub. It needs Python 3.10 or later and lib3mf.',
  license: 'None yet',
  install: 'pip install git+https://github.com/gstark/bambu3mf',
  example: {
    file: 'build.py',
    code: `from bambu3mf import BambuProject

project = BambuProject(
    printer_settings_id="Bambu Lab P1S 0.4 nozzle",
    filaments=[
        {"settings_id": "Bambu PLA Basic @BBL P1S", "colour": "#000000"},
        {"settings_id": "Bambu PLA Basic @BBL P1S", "colour": "#FF5733"},
    ],
)

base = project.add_plate(name="Base")
base.add_stl("frame.stl", extruder=1)
base.add_stl("logo.stl", position=(80, 80), extruder=2)

project.add_plate(name="Lid").add_stl("lid.stl")  # centered on the bed

project.save("enclosure.3mf")`,
  },
  features: [
    {
      title: 'Printer and filament presets',
      body: 'Name Bambu system presets such as `Bambu Lab X1 Carbon 0.4 nozzle`. Bambu Studio loads them without the "Customized Preset" warning.',
    },
    {
      title: 'Multi-color prints',
      body: 'Give each filament slot a color and material. Each STL gets its own extruder, so one plate can print in several colors.',
    },
    {
      title: 'Multiple plates',
      body: 'Bambu Studio puts an object on a plate when the object sits inside that plate\'s area on its grid. bambu3mf copies the grid math from the Bambu Studio source and moves each object into its plate\'s cell.',
    },
    {
      title: 'Placement with bounds checks',
      body: 'Put an object at an `(x, y)` position in millimeters, or leave the position out and it centers on the bed. A part that runs off the bed raises an error before you save.',
    },
    {
      title: 'Any bed size',
      body: 'The default is the 256 mm bed of the P1 and X1 series. Pass `bed_size=(180, 180)` for an A1 mini.',
    },
    {
      title: 'Opens without warnings',
      body: 'Bambu Studio crashes on a multi-plate file that has no filament colors, and warns when the app version does not match. bambu3mf writes both values.',
    },
  ],
  steps: [
    {
      title: 'Install',
      code: 'pip install git+https://github.com/gstark/bambu3mf',
    },
    {
      title: 'Write the project',
      body: 'Create a `BambuProject`, add plates, and add STL files to each plate.',
      code: `from bambu3mf import BambuProject

project = BambuProject(printer_settings_id="Bambu Lab A1 mini 0.4 nozzle", bed_size=(180, 180))
project.add_plate().add_stl("part.stl")
project.save("part.3mf")`,
    },
    {
      title: 'Open it in Bambu Studio',
      body: 'The plates, colors, and printer are already set. Slice and print.',
    },
  ],
}
