<template>
  <div class="p-4 border dark:border-slate-800 border-slate-300">
    <div class="flex items-center gap-2">
      <TextEditable :value="section.title" class="font-semibold flex-grow" @update:value="updateTitle" />
      <NaiveIcon :name="section.enabled ? 'ph:eye': 'ph:eye-slash'" class="cursor-pointer" @click="toggleEnabled()" />
      <NaiveIcon :name="expanded ? 'ph:arrow-up': 'ph:arrow-down'" class="cursor-pointer" @click="toggleExpanded()" />
    </div>

    <NCollapseTransition class="mt-8" :show="expanded">
      {{ section.id }}
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
</script>
