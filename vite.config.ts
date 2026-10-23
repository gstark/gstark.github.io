import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { featured, findProject, projectPath, type FeaturedProject } from './src/data.ts'

const escape = (text: string) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')

function withHead(html: string, project: FeaturedProject) {
  return html
    .replace(/<title>.*<\/title>/, `<title>${escape(`${project.name} · Gavin Stark`)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(project.page.tagline)}`)
}

// Writes a copy of index.html into each project folder, with that project's title,
// so GitHub Pages serves /projects/<slug>/ with status 200.
function projectPages(): Plugin {
  return {
    name: 'project-pages',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      const project = ctx.originalUrl && findProject(new URL(ctx.originalUrl, 'http://localhost').pathname)
      return project ? withHead(html, project) : html
    },
    generateBundle(_, bundle) {
      const index = bundle['index.html']
      if (index?.type !== 'asset') throw new Error('project-pages: index.html is missing from the bundle')
      for (const project of featured) {
        this.emitFile({
          type: 'asset',
          fileName: `${projectPath(project.slug).slice(1)}index.html`,
          source: withHead(String(index.source), project),
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), projectPages()],
})
