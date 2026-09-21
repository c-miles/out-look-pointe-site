// Runs after both Vite builds. Puts the rendered page into dist/index.html so
// crawlers that don't run JavaScript (most AI ones) can read it.
import { readFile, writeFile, rm } from 'node:fs/promises'

const { render } = await import('../dist-ssr/entry-server.js')

const MOUNT = '<div id="app"></div>'
const page = await readFile('dist/index.html', 'utf8')
if (!page.includes(MOUNT)) throw new Error(`prerender: ${MOUNT} not found in dist/index.html`)
await writeFile('dist/index.html', page.replace(MOUNT, `<div id="app">${await render()}</div>`))

const today = new Date().toISOString().slice(0, 10)
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
await writeFile('dist/sitemap.xml', sitemap.replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${today}</lastmod>`))

await rm('dist-ssr', { recursive: true })
