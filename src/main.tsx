import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProjectPage } from './components/ProjectPage.tsx'
import { findProject } from './data.ts'

const project = findProject(location.pathname)

createRoot(document.getElementById('root')!).render(
  <StrictMode>{project ? <ProjectPage project={project} /> : <App />}</StrictMode>,
)
