<template>
  <div class="page p-8">
    <ResumeHeader :resume="resume!" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  colorMode: 'light'
})

const id = useRoute().params.id as string
const { onUpdate } = useResume()

const { data: resume, refresh } = await useAsyncData(() => useResume().get(id))

onUpdate(id, refresh)
</script>

<style scoped>
.page {
  margin: 48px auto;
  width: 210mm;
  height: 297mm;
  border: 2px solid #cbd5e1;
}

@media print {
.page {
  margin: auto;
  width: auto;
  height: auto;
  border: none;
}
}
</style>
