<template>
  <span class="flex gap-1 items-center">
    <NaiveIcon :name="icon" :size="18" />
    <NText>
      <slot />
    </NText>
  </span>
</template>

<script setup lang="ts">
defineProps<{ icon: string }>()
</script>
