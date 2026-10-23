import type { ProjectPageContent } from '../data.ts'

export const raxon: ProjectPageContent = {
  tagline: 'JSON APIs for Ruby where the file path is the route.',
  summary: [
    'Raxon is a Rack 3 framework for JSON APIs. Each endpoint is one Ruby file, and its path sets the URL and the HTTP method. `routes/api/v1/users/__id__/get.rb` answers `GET /api/v1/users/{id}`.',
    'The same file declares the parameters and responses. Raxon checks requests and responses against those declarations and builds the OpenAPI document from them, so the docs come from the code that runs.',
  ],
  status: 'Unreleased',
  note: 'A personal project. Raxon is not on RubyGems, so you install it from GitHub.',
  license: 'MIT',
  install: 'gem "raxon", github: "gstark/raxon-public"',
  example: {
    file: 'routes/api/v1/ping/get.rb',
    code: `Raxon.route do
  description "Health check endpoint"

  response 200, type: :object do
    property :success, type: :boolean, description: "Always true"
    property :timestamp, type: :string, description: "Current server time"
  end

  handle do |_request|
    {success: true, timestamp: Time.now.iso8601}
  end
end`,
  },
  features: [
    {
      title: 'File-based routing',
      body: 'Put a file in `routes/` and the route exists. An `all.rb` file shares its `before` and `after` blocks with every route below it.',
    },
    {
      title: 'OpenAPI from the code',
      body: 'Responses, parameters, and security schemes sit next to the handler. Raxon generates the OpenAPI document from them.',
    },
    {
      title: 'Validation in both directions',
      body: 'dry-schema checks the incoming parameters and the outgoing response against what the route declares.',
    },
    {
      title: 'HTTP details done for you',
      body: '`405` with an `Allow` header, HEAD from GET, OPTIONS responses, and ETag helpers that return `304 Not Modified`.',
    },
    {
      title: 'Test helpers',
      body: '`Raxon::Test` sends requests from your specs. An RSpec matcher fails when a response does not match its declared schema.',
    },
    {
      title: 'Ready for coding agents',
      body: 'The repository ships an `llms.txt` map of the DSL. `raxon new` writes an `AGENTS.md` into each new project.',
    },
  ],
  steps: [
    {
      title: 'Add the gem',
      file: 'Gemfile',
      code: 'gem "raxon", github: "gstark/raxon-public"',
    },
    {
      title: 'Write a route',
      body: 'Save the example above as `routes/api/v1/ping/get.rb`.',
    },
    {
      title: 'Run the server',
      body: 'The development server listens on port 9292. Pass `-p` to change it.',
      code: `bundle exec raxon server
curl http://localhost:9292/api/v1/ping`,
    },
  ],
}
