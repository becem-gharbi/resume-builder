<template>
  <span class="flex gap-2 items-center">
    <NaiveIcon :name="icon" :size="18" />
    <label>
      <slot />
    </label>
  </span>
</template>

<script setup lang="ts">
defineProps<{ icon: string }>()
</script>
