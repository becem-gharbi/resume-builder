<template>
  <div class="my-2 p-4 border">
    {{ section.title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{section: Section}>()
</script>
