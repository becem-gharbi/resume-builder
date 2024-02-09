<template>
  <div class="p-16">
    <ResumeHeader :resume="resume" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  colorMode: 'light'
})

const { data: resume } = await useAsyncData(() => useResume().get(useRoute().params.id as string))
</script>
