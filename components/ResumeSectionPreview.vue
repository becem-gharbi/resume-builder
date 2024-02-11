<template>
  <div>
    <div class="border-b-2 border-slate-200  mb-4">
      <NText class="font-normal">
        {{ section.title.toUpperCase() }}
      </NText>
    </div>
    <NText><span v-html="section.content" /></NText>
  </div>
</template>

<script setup lang="ts">
defineProps<{section: Section}>()
</script>
