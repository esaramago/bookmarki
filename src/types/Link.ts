import type Folder from './Folder'

export default interface Link {
  id: string
  description: string
  parent?: any
  href: string
}