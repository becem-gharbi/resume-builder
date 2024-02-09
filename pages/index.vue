<template>
  <div>
    <n-text class="text-lg font-semibold">
      My resumes
    </n-text>

    <div class="mt-8 flex flex-wrap gap-6">
      <ResumeCreate />
      <ResumeCard v-for="resume of resumes" :id="resume.id" :key="resume.id" :title="resume.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: resumes } = await useAsyncData(() => useResume().getAll())
</script>
