<template>
  <div>
    <div class="border-b-2 border-gray-200 mb-4">
      <NText class="font-normal text-base">
        {{ section.title.toUpperCase() }}
      </NText>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{section: Section}>()
</script>
