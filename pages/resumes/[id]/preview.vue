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

const { data: resume, refresh } = await useAsyncData(() => useResume().get(useRoute().params.id as string))

onMounted(() => {
  const broadcastChannel = new BroadcastChannel(`resume:${resume.value!.id}`)
  broadcastChannel.addEventListener('message', () => refresh())
})
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
