<template>
  <ul>
    <li v-for="page in props.pages">
      <a :href="page.href">{{page.description}}: {{page.path?.id}}</a>
    </li>
  </ul>
  <ul>
    <li v-for="folder in props.folders">
      {{folder.description}}: {{folder.path?.id}}
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps(['folders', 'pages'])
</script>

