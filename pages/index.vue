<template>
  <PageWrapper>
    <template #header>
      My resumes
    </template>

    <div class="mt-8 flex flex-wrap gap-6">
      <ResumeCreate />
      <ResumeCard
        v-for="resume of resumes"
        :id="resume.id"
        :key="resume.id"
        :title="resume.title"
        :updated-at="resume.updatedAt"
      />
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
const { data: resumes } = await useAsyncData(() => useResume().getAll())
</script>
