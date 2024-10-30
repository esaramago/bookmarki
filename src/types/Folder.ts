export default interface Folder {
  id: string
  description: string
  children?: Folder[]

  parent?: any
}