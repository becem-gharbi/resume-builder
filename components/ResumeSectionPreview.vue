<template>
  <div>
    <div class="border-b-2 border-slate-200  mb-4">
      <NText class="font-normal">
        {{ section.title.toUpperCase() }}
      </NText>
    </div>
    <MdPreview :model-value="section.content" />
  </div>
</template>

<script setup lang="ts">
import { MdPreview } from 'md-editor-v3'

defineProps<{section: Section}>()
</script>
