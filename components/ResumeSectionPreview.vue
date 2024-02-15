<template>
  <div>
    <div class="mb-4">
      <label class="font-normal text-base opacity-90">
        {{ section.title }}
      </label>
      <div :style="{height:'2px', borderBottom:'1px solid'}" class="opacity-40" />
    </div>
    <MdPreview :model-value="section.content" class="opacity-90" />
  </div>
</template>

<script setup lang="ts">
import { MdPreview } from 'md-editor-v3'

defineProps<{section: Section}>()
</script>
