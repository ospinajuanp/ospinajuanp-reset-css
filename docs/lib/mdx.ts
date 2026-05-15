import fs from 'fs'
import path from 'path'

const docsDirectory = path.join(process.cwd(), 'content')

export function getDocBySlug(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return fileContents
}

export function getAllDocs() {
  const fileNames = fs.readdirSync(docsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''))
}