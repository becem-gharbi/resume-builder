<template>
  <NText>{{ section.content }}</NText>
</template>

<script setup lang="ts">
defineProps<{section: Section}>()
</script>
