import type { ProjectPageContent } from '../data.ts'

export const pietTicTacToe: ProjectPageContent = {
  tagline: 'A tic-tac-toe game whose source code is a picture.',
  summary: [
    'Piet, by David Morgan-Mar, is an esoteric language where the program is an image. The interpreter moves across blocks of color, and the change in hue and lightness from one block to the next picks the instruction: push, add, branch, read a number, print a character.',
    'Nobody draws a full game by hand. I wrote the game in a small C-like language, and a Perl compiler and assembler turn it into a 331 by 13,709 pixel PNG. You play against the computer in the terminal, and it does not lose.',
  ],
  status: 'Finished, 2013',
  note: 'A fun project from 2013. It has no README and no tests. The Makefile needs Perl with Parse::RecDescent and the netpbm tools.',
  license: 'None',
  install: 'git clone https://github.com/gstark/piet-tic-tac-toe.git',
  example: {
    file: 'A game: you are O, the computer is X',
    code: `If you want to go first enter 1, otherwise 0
0
I go first and I'm X

I move to: 0

X..
...
...
Move: 4

I move to: 1

XX.
.O.
...
Move: 2

I move to: 6

XXO
.O.
X..
Move: 7

I move to: 3

XXO
XO.
XO.
**** I WIN! ****`,
  },
  media: [
    {
      kind: 'image',
      src: '/media/piet-tic-tac-toe/program-top.webp',
      alt: 'The top 200 rows of the program image, enlarged 4 times: white lines on black carry the control flow, and short runs of colored pixels hold the instructions.',
      width: 1324,
      height: 800,
    },
  ],
  features: [
    {
      title: 'A C-like source language',
      body: '`tic-tac-toe.script` has functions, variables, `if`/`else`, `while`, `for`, and `return`. An `asm { }` block drops down to Piet instructions, such as `@"text"` to print a string.',
    },
    {
      title: 'Compiler and assembler',
      body: '`piet-compiler` parses the script with Parse::RecDescent and writes Piet assembly. `piet-assembler` lays that out as colored pixels, and `pnmtopng` saves the PNG.',
    },
    {
      title: 'The board is one number',
      body: 'Piet has a stack of integers and nothing else. The game stores all nine squares as one base-3 number: 0 is empty, 1 is O, and 2 is X.',
    },
    {
      title: 'A computer that does not lose',
      body: 'The computer looks up its next move in a table keyed on that board number. There is one table for when it goes first and one for when it goes second.',
    },
    {
      title: 'Input checks',
      body: 'A move to a square that is taken, or outside 0 to 8, prints `ILLEGAL MOVE! Try again human!` and asks again.',
    },
  ],
  steps: [
    {
      title: 'Clone',
      code: 'git clone https://github.com/gstark/piet-tic-tac-toe.git',
    },
    {
      title: 'Build the image',
      body: 'Optional, because the repository already has `tic-tac-toe.png`. The build writes the PNG and a PNM copy for npiet.',
      code: 'make',
    },
    {
      title: 'Play',
      body: 'Run the image with a Piet interpreter, such as npiet. Squares are numbered 0 to 8, left to right, top to bottom.',
      code: 'npiet tic-tac-toe.png.pnm',
    },
  ],
}
