import type { ProjectPageContent } from '../data.ts'

export const sigil: ProjectPageContent = {
  tagline: 'A programming language for code that a model writes and a machine checks.',
  summary: [
    'Most languages expect a person to write the code and another person to read it carefully. Sigil expects a language model to write it and a machine to verify it.',
    'So a program should be checkable without reading all of it. Types, capabilities, and contracts all go in the function signature. You can tell what a function is allowed to do, and what it promises, without opening its body.',
  ],
  status: 'v0.1, experimental',
  note: 'A personal research project. It runs real programs, and the largest is a 2,000 line double-entry accounting service with an HTTP API. Contracts use property testing, not an SMT solver. The compiler is written in Rust, and the bytecode VM runs about four times slower than Ruby on the benchmark in the docs.',
  license: 'MIT',
  install: 'brew install gstark/sigil/sigil',
  example: {
    file: 'ledger.sg',
    code: `/// Takes money out of an account.
fn Ledger.debit(ledger: Ledger, account: Account, amount: Int) -> Ledger
  requires amount > 0
  requires ledger.covers(account, amount)
  ensures r => r.balance(account.id) == ledger.balance(account.id) - amount
  ensures r => r.total() == ledger.total()
{
  ledger with { balances: Map.insert(ledger.balances, account.id, ledger.balance(account.id) - amount) }
}`,
  },
  media: [
    {
      kind: 'video',
      src: '/media/sigil/test.mp4',
      poster: '/media/sigil/counterexample.webp',
      alt: 'sigil test finds that discount(4, 13) breaks the ensures clause. After the fix it finds an overflow in price * percent. After a bound on price, all 100 cases pass.',
      width: 1400,
      height: 500,
    },
  ],
  features: [
    {
      title: 'Contracts are the tests',
      body: '`requires` and `ensures` run in dev mode. `sigil test` makes inputs from the parameter types and reports the smallest one that breaks a promise.',
    },
    {
      title: 'No ambient authority',
      body: 'A function can touch the outside world only through a capability parameter. A signature with no capabilities is pure.',
    },
    {
      title: 'Programs ask before they start',
      body: 'If `main` needs a console and the config grants none, the program does not start. Nothing fails halfway through.',
    },
    {
      title: 'The codebase is a database',
      body: 'Definitions are stored by a BLAKE3 hash of their syntax tree. A rename changes no hashes, and `sigil search --type` finds functions by signature.',
    },
    {
      title: 'Docs that run',
      body: 'Every Sigil code block in a `///` comment is type checked and run. Each statement in it is an assertion.',
    },
    {
      title: 'A small language',
      body: 'No null, exceptions, inheritance, macros, or operator overloading. Sum types with exhaustive matching, and value semantics with no borrow checker.',
    },
  ],
  steps: [
    {
      title: 'Install',
      body: 'Or build from source with `cargo install --path crates/sigil-cli --locked`. The standard library is compiled into the binary.',
      code: 'brew install gstark/sigil/sigil',
    },
    {
      title: 'Try a file',
      body: '`exec` checks and runs a program in a temporary store, then deletes the store.',
      code: 'sigil exec hello.sg',
    },
    {
      title: 'Keep it and test it',
      body: 'Add the program to a store, grant it a console, and run its property tests.',
      code: `sigil add hello.sg
echo '{ "console": true }' > caps.json
sigil run main --caps caps.json
sigil test greeting`,
    },
  ],
}
