<template>
  <div>
    {{ section.content }}
  </div>
</template>

<script setup lang="ts">
defineProps<{section: Section}>()
</script>
