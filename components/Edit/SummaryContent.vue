<template>
  <TextEditable :value="section.content" @update:value="v => $emit('update:content', v)" />
</template>

<script setup lang="ts">
defineProps<{ section: Section }>()
defineEmits(['update:content'])
</script>
