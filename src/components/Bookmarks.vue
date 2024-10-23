<template>
  <ul>
    <li v-for="folder in props.folders">{{folder.description}}: {{folder.path?.id}}</li>
  </ul>
</template>

<script setup>
  const props = defineProps(['folders'])
</script>

