<template>
  <li>
    {{folder.description}}
    <ul v-if="folder.folders">
      <Folder
        v-for="childFolder in folder.folders"
        :folder="childFolder"
      />
      <li v-for="link in folder.links">
        <a
          :href="link.href"
        >{{ link.description }}</a>
        </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
const props = defineProps(['folder'])
const { folder } = props
</script>