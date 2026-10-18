import type { ImageMetadata } from "astro"

export interface Experience {
  company: string
  position: string
  startDate: Date
  endDate?: Date
  location?: string
  highlights: string[]
  link?: string
  logo?: ImageMetadata
}

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  repo?: string
  demo?: string
  image?: ImageMetadata
}

export interface NavItem {
  title: string
  href: string
}

export interface Education {
  title: string
  institution: string
  startDate: Date
  endDate: Date
}
