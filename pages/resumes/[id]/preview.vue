<template>
  <div class="p-8">
    <ResumeHeaderPreview :resume="resume!" />

    <div class="mt-16 flex-3 flex gap-12">
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
definePageMeta({
  layout: 'preview',
  colorMode: 'light'
})

const id = useRoute().params.id as string
const { onUpdate } = useResume()

const { data: resume, refresh } = await useAsyncData(() => useResume().get(id))

onUpdate(id, refresh)

const column0 = computed(() => resume.value?.sections.filter(s => s.column === 0))
const column1 = computed(() => resume.value?.sections.filter(s => s.column === 1))
</script>
