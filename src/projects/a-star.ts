import type { ProjectPageContent } from '../data.ts'

export const aStar: ProjectPageContent = {
  tagline: 'A* path search for Ruby, driven by procs.',
  summary: [
    'I kept writing A* for Advent of Code puzzles, so I pulled it out into a gem. `AStar.traverse` does not know what a node is. You give it a start node and procs for the goal test, the neighbors, the edge weight, and the heuristic. A node can be a symbol, a `[row, col]` pair, or a whole puzzle state.',
    'The result holds the path cost, the path as a lazy `Enumerator`, and every node the search visited. Leave out the heuristic and the search is Dijkstra\'s algorithm.',
  ],
  status: 'v0.1, unreleased',
  note: 'A personal project for puzzle solving. It is not on RubyGems yet, so you install it from GitHub. It needs Ruby 3.2 or later and has no runtime dependencies.',
  license: 'MIT',
  install: 'gem "a_star", github: "gstark/a_star"',
  example: {
    file: 'maze.rb',
    code: `require "a_star"

grid = File.readlines("maze.txt", chomp: true).map(&:chars)
goal = [19, 19]

result = AStar.traverse(
  start: [1, 1],
  goal: proc { |node| node == goal },
  neighbors: proc do |(row, col), _path|
    [[0, 1], [1, 0], [0, -1], [-1, 0]]
      .map { |dr, dc| [row + dr, col + dc] }
      .reject { |r, c| grid[r][c] == ":" }
  end,
  weight: proc { 1 },
  heuristic: proc { |(row, col)| (goal[0] - row).abs + (goal[1] - col).abs }
)

result.score       # => 44
result.path.to_a   # => [[1, 1], [1, 2], ..., [19, 19]]
result.visited     # => every node the search reached`,
  },
  media: [
    {
      kind: 'video',
      src: '/media/a_star/maze-race.mp4',
      poster: '/media/a_star/maze-race.webp',
      alt: 'The maze race demo. Dijkstra on the left and A* on the right search the same 35 by 31 maze. A* reaches the goal after 272 nodes. Dijkstra floods almost the whole maze and stops after 2,273 nodes. Both paths cost 132.',
      width: 1376,
      height: 910,
    },
  ],
  features: [
    {
      title: 'Any node type',
      body: 'A node can be any object that works as a hash key. Graph nodes, grid coordinates, and frozen puzzle states all work.',
    },
    {
      title: 'Procs for each rule',
      body: '`goal`, `neighbors`, `weight`, and `heuristic` are procs, so one method covers mazes, weighted graphs, and Advent of Code state searches.',
    },
    {
      title: 'Lazy path',
      body: '`result.path` is an `Enumerator`. The gem builds the path from start to goal only when you iterate it.',
    },
    {
      title: 'Path-aware neighbors',
      body: 'The `neighbors` proc also gets the path to the current node. A puzzle can use it to forbid moves, such as "no more than three steps in a row in one direction".',
    },
    {
      title: 'Visit callback',
      body: 'The `visit` proc runs each time the search expands a node. The maze race demo above records the search with it.',
    },
    {
      title: 'Maze race demo',
      body: '`examples/maze_race.rb` animates Dijkstra and A* side by side in the terminal. It uses only the Ruby standard library and needs a terminal with 24-bit color.',
    },
  ],
  steps: [
    {
      title: 'Install',
      body: 'Add the gem to your Gemfile, then run `bundle install`.',
      code: 'gem "a_star", github: "gstark/a_star"',
    },
    {
      title: 'Describe the search',
      body: 'Pass a start node, a goal proc, and a neighbors proc. Add `weight` and `heuristic` when edges have costs.',
      code: `result = AStar.traverse(
  start: :a,
  goal: proc { |node| node == :d },
  neighbors: proc { |node, _path| graph.fetch(node, []) }
)`,
    },
    {
      title: 'Watch it run',
      body: 'Clone the repository and run the maze race.',
      code: `git clone https://github.com/gstark/a_star.git
cd a_star
ruby examples/maze_race.rb --loop`,
    },
  ],
}
