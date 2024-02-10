<template>
  <NText><div v-html="section.content" /></NText>
</template>

<script setup lang="ts">
defineProps<{section: Section}>()
</script>
