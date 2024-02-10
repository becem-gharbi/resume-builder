<template>
  <div class="p-4 border dark:border-slate-800 border-slate-300">
    <div class="flex items-center gap-2">
      <TextEditable :value="section.title" class="font-semibold flex-grow" @update:value="updateTitle" />
      <NaiveIcon :name="section.enabled ? 'ph:eye': 'ph:eye-slash'" class="cursor-pointer" @click="toggleEnabled()" />
      <NaiveIcon :name="expanded ? 'ph:arrow-up': 'ph:arrow-down'" class="cursor-pointer" @click="toggleExpanded()" />
    </div>

    <NCollapseTransition class="mt-8" :show="expanded">
      <EditCertificationsContent v-if="section.type === 'certifications'" :section="section" @update:content="updateContent" />
      <EditEducationContent v-else-if="section.type === 'education'" :section="section" @update:content="updateContent" />
      <EditExperienceContent v-else-if="section.type === 'experience'" :section="section" @update:content="updateContent" />
      <EditLanguagesContent v-else-if="section.type === 'languages'" :section="section" @update:content="updateContent" />
      <EditProjectsContent v-else-if="section.type === 'projects'" :section="section" @update:content="updateContent" />
      <EditSkillsContent v-else-if="section.type === 'skills'" :section="section" @update:content="updateContent" />
      <EditStrengthsContent v-else-if="section.type === 'strengths'" :section="section" @update:content="updateContent" />
      <EditSummaryContent v-else-if="section.type === 'summary'" :section="section" @update:content="updateContent" />
      <EditVolunteeringContent v-else-if="section.type === 'volunteering'" :section="section" @update:content="updateContent" />
    </NCollapseTransition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ resumeId: string, section: Section }>()

const section = ref(props.section)

const expanded = ref(false)

const { updateSections } = useResume()

function toggleExpanded () {
  expanded.value = !expanded.value
}

async function toggleEnabled () {
  section.value.enabled = !section.value.enabled

  const data = [{ id: section.value.id, enabled: section.value.enabled }]
  await updateSections(props.resumeId, data)
}

async function updateTitle (newTitle: string) {
  section.value.title = newTitle

  const data = [{ id: section.value.id, title: section.value.title }]
  await updateSections(props.resumeId, data)
}

async function updateContent (newContent: string) {
  section.value.content = newContent

  const data = [{ id: section.value.id, content: section.value.content }]
  await updateSections(props.resumeId, data)
}
</script>
