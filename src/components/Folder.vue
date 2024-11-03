<template>
  <li>
    <slot></slot>
    <ul v-if="folders">
      <Folder
        v-for="folder in folders"
        :folders="folder.folders"
        :links="folder.links"
      >{{ folder.description }}</Folder>
      <Link
        v-for="link in links"
        :href="link.href"
      >{{ link.description }}</Link>
    </ul>
  </li>
</template>

<script setup lang="ts">
import Link from './Link.vue'
import type FolderType from '@/types/Folder'
import type LinkType from '@/types/Link'

const { folders, links } = defineProps<{
  folders?: FolderType[],
  links?: LinkType[],
}>()

</script>