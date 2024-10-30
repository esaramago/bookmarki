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
  import type RawFolderType from '@/types/rawFolder'
  import { ref, onMounted } from 'vue'

  const props = defineProps(['folders', 'links'])

  //#region Folders
  const rawFolders: RawFolderType[] = props.folders
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

  const addFolderToStructure = (childFolder: RawFolderType, parentId: string) => {
    const parentFolder = folders.value.find(parentFolder => parentFolder.id === parentId)

    if (!parentFolder) return

    if (!parentFolder.children) parentFolder.children = []
    parentFolder.children.push(childFolder)
  }

  onMounted(() => {
    createFolderStructure()

    console.log(folders.value)
  })


  //#endregion Folders

  //#region Links
  const links = ref([])
  const rawLinks = props.links

  //#endregionLinks

</script>

