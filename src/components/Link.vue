<template>
  <li>
    <a
      :href="href"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script setup lang="ts">

const { href } = defineProps<{
  href: string
}>()
</script>