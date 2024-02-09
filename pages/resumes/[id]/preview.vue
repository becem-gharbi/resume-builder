<template>
  <div class="p-16">
    <ResumeHeader />

    <div class="mt-12 flex gap-16">
      <div class="flex flex-col gap-8">
        <ResumeSection title="summary">
          <ResumeSummary />
        </ResumeSection>

        <ResumeSection title="professional experiences">
          <ResumeExperience v-for="exp of professionalExperiences" :key="exp.id" :experience="exp" />
        </ResumeSection>
      </div>

      <div class="flex flex-col gap-8">
        <ResumeSection title="summary">
          <ResumeSummary />
        </ResumeSection>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  colorMode: 'light',
  auth: false
})

const resumeData = useResumeData()

const professionalExperiences = computed(() => resumeData.value.experiences.filter(exp => exp.type === 'professional'))
</script>
