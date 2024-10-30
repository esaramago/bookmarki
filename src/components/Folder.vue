<template>
  <li>
    {{folder.description}}
    <ul v-if="folder.children">
      <Folder
        v-for="childFolder in folder.children"
        :folder="childFolder"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
const props = defineProps(['folder'])
const { folder } = props
</script>