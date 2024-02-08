<template>
  <div>
    <div class="border-b-2 border-gray-200 mb-4">
      <NText class="font-normal text-base">
        {{ title.toUpperCase() }}
      </NText>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{title:string}>()
</script>
