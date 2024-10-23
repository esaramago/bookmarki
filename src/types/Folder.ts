interface FolderPath {
  id: string
}
export default interface Folder {
  id: string
  description: string
  path: FolderPath
}