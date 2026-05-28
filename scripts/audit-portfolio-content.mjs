import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const rootDir = process.cwd()
const projectFile = path.join(rootDir, 'src/data/projects.ts')
const source = fs.readFileSync(projectFile, 'utf8')

const executableSource = source
  .replace(/import[^\n]+\n/, '')
  .replace('export const projects =', 'const projects =')
  .replace(/\] satisfies Project\[\]\s*$/m, ']')

const context = {}
vm.createContext(context)
vm.runInContext(`${executableSource}\nthis.projects = projects;`, context)

const projects = context.projects
const errors = []
const warnings = []

const requireText = (value, label, project) => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    errors.push(`${project.id}: ${label} 값이 비어 있습니다.`)
  }
}

const bannedCopyPatterns = [
  '기존 포트폴리오 데이터에서 1차 이관',
  '상세 성과 문장은 다음 단계',
  '프로젝트 데이터를 정규화해 공통 상세 템플릿',
]

const ids = new Set()

for (const project of projects) {
  if (ids.has(project.id)) errors.push(`${project.id}: 중복된 프로젝트 ID입니다.`)
  ids.add(project.id)

  requireText(project.title, 'title', project)
  requireText(project.summary, 'summary', project)
  requireText(project.thumbnail, 'thumbnail', project)

  if (!Array.isArray(project.solution) || project.solution.length === 0) {
    errors.push(`${project.id}: solution 항목이 비어 있습니다.`)
  }

  if (!Array.isArray(project.result) || project.result.length === 0) {
    errors.push(`${project.id}: result 항목이 비어 있습니다.`)
  }

  for (const pattern of bannedCopyPatterns) {
    const haystack = [project.summary, project.problem, ...(project.solution || []), ...(project.result || [])].join(' ')
    if (haystack.includes(pattern)) {
      errors.push(`${project.id}: 임시 이관 문구가 남아 있습니다. (${pattern})`)
    }
  }

  const thumbnailPath = path.join(rootDir, 'public', project.thumbnail.replace(/^\//, ''))
  if (!fs.existsSync(thumbnailPath)) {
    errors.push(`${project.id}: thumbnail 파일을 찾을 수 없습니다. (${project.thumbnail})`)
  }

  const mediaItems = project.media || []
  if (project.featured && mediaItems.length < 2) {
    warnings.push(`${project.id}: Featured 프로젝트는 실제 상세 스크린샷 2장 이상을 권장합니다.`)
  }

  for (const media of mediaItems) {
    requireText(media.src, 'media.src', project)
    requireText(media.alt, 'media.alt', project)

    if (media.src === project.thumbnail) {
      warnings.push(`${project.id}: media가 thumbnail만 참조하고 있습니다. 실제 상세 스크린샷 보강을 권장합니다.`)
    }

    const mediaPath = path.join(rootDir, 'public', media.src.replace(/^\//, ''))
    if (!fs.existsSync(mediaPath)) {
      errors.push(`${project.id}: media 파일을 찾을 수 없습니다. (${media.src})`)
    }
  }
}

const featuredCount = projects.filter((project) => project.featured).length
if (featuredCount < 4 || featuredCount > 6) {
  warnings.push(`Featured 프로젝트는 4~6개 권장입니다. 현재 ${featuredCount}개입니다.`)
}

if (warnings.length) {
  console.warn('Portfolio content audit warnings:')
  for (const warning of warnings) console.warn(`- ${warning}`)
}

if (errors.length) {
  console.error('Portfolio content audit failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Portfolio content audit passed. projects=${projects.length}, featured=${featuredCount}`)
