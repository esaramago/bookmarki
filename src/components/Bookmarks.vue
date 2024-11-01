<template>
  <ul>
    <Folder
      v-for="folder in folders"
      :folder="folder"
    />
  </ul>
</template>

<script setup lang="ts">
  import Folder from './Folder.vue'
  import type FolderType from '@/types/folder'
  import type Link from '@/types/Link'
  import { ref, onMounted } from 'vue'

  const props = defineProps(['folders', 'links'])

  //#region Folders
  const rawFolders: FolderType[] = props.folders
  const folders = ref<FolderType[]>([])

  const createFolderStructure = () => {
    rawFolders.forEach(folder => {
      if (folder.parent?.id) {
        addFolderToStructure(folder, folder.parent.id)
      } else {
        // add root folder to array
        folders.value.push(folder)
      }
    })
  }

  const addFolderToStructure = (childFolder: FolderType, parentId: string) => {

    // TOFIX: find deep
    const parentFolder = findParentFolder(folders.value, parentId, childFolder.description)

    if (!parentFolder) return

    if (!parentFolder.folders) parentFolder.folders = []
    parentFolder.folders.push(childFolder)
  }

  const findParentFolder = (folders: Folders[], parentId: string, test?) => {

// TOFIX

    return folders.find(parentFolder => {

      if (test === 'Lojas' && parentFolder.description === 'Orégãos') {
        debugger
      }

      if (parentFolder.id === parentId) {
        return parentFolder
      } else if (parentFolder.folders) {
        return findParentFolder(parentFolder.folders, parentId, test)
      }
    })


  }


  //#endregion Folders

  //#region Links
  const links: Link[] = props.links

  const addLinksToStructure = (link: Link, folderId: string) => {

    // TOFIX: find deep
    const parentFolder = folders.value.find(parentFolder => parentFolder.id === folderId)

    if (!parentFolder) return

    if (!parentFolder.links) parentFolder.links = []
    parentFolder.links.push(link)
  }

  //#endregionLinks



  //#region Links
  onMounted(() => {
    createFolderStructure()

    links.forEach((link: Link) => {
      if (link.parent) {
        addLinksToStructure(link, link.parent.id)
      } else {
        // add root link to array
        folders.value.push(link)
      }
    })

    console.log(folders.value)
  })

</script>

