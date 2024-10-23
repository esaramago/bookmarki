import type Folder from '@/types/Folder'

export default interface File {
  id: string
  description: string
  href: string
  path: Folder
}