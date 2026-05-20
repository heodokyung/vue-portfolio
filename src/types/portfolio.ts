export type ProjectPlatform = 'web' | 'mobile' | 'responsive'
export type ProjectCategory = 'work' | 'side' | 'study'
export type ProjectFilterValue = 'all' | 'work' | 'side' | 'web' | 'mobile' | 'responsive'

export interface ProjectPeriod {
  start: string
  end: string | null
  label: string
}

export interface ProjectLink {
  label: string
  href: string
  type: 'site' | 'github' | 'case-study' | 'legacy'
}

export interface ProjectMedia {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  id: string
  legacyId?: string | null
  title: string
  company?: string | null
  platform: ProjectPlatform
  category: ProjectCategory
  locale: 'ko' | 'en' | 'etc'
  period: ProjectPeriod
  contribution?: number
  role: string[]
  stack: string[]
  summary: string
  problem?: string
  solution: string[]
  result: string[]
  tags: string[]
  thumbnail: string
  media: ProjectMedia[]
  featured: boolean
  isNew?: boolean
}

export interface Skill {
  id: string
  name: string
  summary: string
  url?: string | null
  image?: string
  group: 'core' | 'frontend' | 'workflow' | 'collaboration'
}

export interface Career {
  id: string
  company: string
  period: string
  department?: string | null
  position?: string | null
  summary: string
  highlights: string[]
}

export interface AboutItem {
  id: string
  type: 'certificate' | 'activity' | 'education'
  title: string
  period?: string | null
  organization?: string | null
  summary?: string | null
  url?: string | null
}
