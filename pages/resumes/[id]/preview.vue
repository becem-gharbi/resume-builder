<template>
  <div :style="style">
    <ResumeHeaderPreview :resume="resume!" />

    <div class="mt-12 flex-3 flex gap-12">
      <div class="w-full flex flex-col gap-8">
        <ResumeSectionPreview
          v-for="section of column0"
          v-show="section.enabled"
          :key="section.id"
          :section="section"
        />
      </div>

      <div class="w-full flex-2 flex flex-col gap-8">
        <ResumeSectionPreview
          v-for="section of column1"
          v-show="section.enabled"
          :key="section.id"
          :section="section"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'

definePageMeta({
  layout: 'preview',
  colorMode: 'light'
})

const id = useRoute().params.id as string
const { onUpdate } = useResume()

const { data: resume, refresh } = await useAsyncData(() => useResume().get(id))

const channel = onUpdate(id, () => refresh())

onUnmounted(() => channel.close())

const column0 = computed(() => resume.value?.sections.filter(s => s.column === 0))
const column1 = computed(() => resume.value?.sections.filter(s => s.column === 1))

useHead(() => ({
  link: [{
    rel: 'stylesheet',
    href: `https://fonts.googleapis.com/css2?family=${resume.value?.styles.fontFamily}:wght@400;500;600&display=swap`
  }]
}))

const style = computed<StyleValue>(() => ({
  fontFamily: resume.value?.styles.fontFamily,
  padding: resume.value?.styles.padding,
  color: resume.value?.styles.color
}))
</script>
