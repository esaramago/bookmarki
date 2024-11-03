<template>
  <ul>
    <Folder
      v-for="folder in folders"
      :folders="folder.folders"
      :links="folder.links"
    >{{ folder.description }}</Folder>

    <!-- <template v-if="rootLinks">
      <Link
        v-for="link in rootLinks"
        :href="link.href"
      >{{ link.description }}</Link>
    </template> -->
  </ul>
</template>

<script setup lang="ts">
  import Folder from './Folder.vue'
  import Link from './Link.vue'
  import type FolderType from '@/types/Folder'
  import type LinkType from '@/types/Link'
  import { ref, onMounted } from 'vue'

  const props = defineProps(['folders', 'links'])

  //#region Folders
  const rawFolders: FolderType[] = props.folders
  const folders = ref<FolderType[]>([])

  function createFolderStructure() {
    const lookup: any = {}
    const rootNodes: FolderType[] = []

    // Create a lookup object for efficient access
    rawFolders.forEach(folder => {
      lookup[folder.id] = folder
    })

    // Iterate over the flat array and assign children to parents
    rawFolders.forEach(folder => {
      if (folder.parent) {
        const parent = lookup[folder.parent.id]
        parent.folders = parent.folders || []
        parent.folders.push(folder)
      } else {
        rootNodes.push(folder)
      }
    })

    return rootNodes
  }


  //#endregion Folders

  //#region Links
  const links: LinkType[] = props.links

  const addLinksToStructure = (link: LinkType, folderId: string) => {

    const parentFolder = findObjectById(folders.value, folderId)

    if (!parentFolder) return

    if (!parentFolder.links) parentFolder.links = []
    parentFolder.links.push(link)
  }

  function findObjectById(folders: FolderType[], id: string) {
    for (let i = 0; i < folders.length; i++) {
      const folder = folders[i]

      if (folder.id === id) {
        return folder
      }

      if (folder.folders && folder.folders.length > 0) {
        const found: FolderType = findObjectById(folder.folders, id)
        if (found) {
          return found
        }
      }
    }

    return null
  }

  //#endregionLinks



  //#region Links
  onMounted(() => {
    folders.value = createFolderStructure()

    links.forEach((link: LinkType) => {
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

