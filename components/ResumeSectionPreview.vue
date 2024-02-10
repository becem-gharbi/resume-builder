<template>
  <div>
    <div class="border-b-2  mb-4">
      <NText class="font-normal">
        {{ section.title.toUpperCase() }}
      </NText>
    </div>
    <PreviewCertificationsContent v-if="section.type === 'certifications'" :section="section" />
    <PreviewEducationContent v-else-if="section.type === 'education'" :section="section" />
    <PreviewExperienceContent v-else-if="section.type === 'experience'" :section="section" />
    <PreviewLanguagesContent v-else-if="section.type === 'languages'" :section="section" />
    <PreviewProjectsContent v-else-if="section.type === 'projects'" :section="section" />
    <PreviewSkillsContent v-else-if="section.type === 'skills'" :section="section" />
    <PreviewStrengthsContent v-else-if="section.type === 'strengths'" :section="section" />
    <PreviewSummaryContent v-else-if="section.type === 'summary'" :section="section" />
    <PreviewVolunteeringContent v-else-if="section.type === 'volunteering'" :section="section" />
  </div>
</template>

<script setup lang="ts">
defineProps<{section: Section}>()
</script>
