import type Link from './Link'

export default interface Folder {
  id: string
  description: string
  folders?: Folder[]
  links?: Link[]

  parent?: any
}