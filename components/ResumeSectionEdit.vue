<template>
  <div class="p-4 border dark:border-slate-800 border-slate-300">
    <div class="flex items-center gap-4">
      <TextEditable :value="section.title" class="font-semibold flex-grow" @update:value="updateTitle" />
      <NaiveIcon :name="section.enabled ? 'ph:eye': 'ph:eye-slash'" class="cursor-pointer" @click="toggleEnabled()" />
      <NaiveIcon name="ph:pencil-simple-line" class="cursor-pointer" @click="showEditModal = true" />
    </div>

    <NModal :show="showEditModal" :closable="false" preset="card" class="max-w-3xl">
      <MarkdownEditor :value="section.content" @update:value="updateContent" @cancel="showEditModal = false" />
    </NModal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ resumeId: string, section: Section }>()

const section = ref(props.section)

const showEditModal = ref(false)

const { updateSections } = useResume()

async function toggleEnabled () {
  section.value.enabled = !section.value.enabled

  const data = [{ id: section.value.id, enabled: section.value.enabled }]
  await updateSections(props.resumeId, data)
}

async function updateTitle (title: string) {
  section.value.title = title

  const data = [{ id: section.value.id, title: section.value.title }]
  await updateSections(props.resumeId, data)
}

async function updateContent (content: string) {
  showEditModal.value = false
  section.value.content = content

  const data = [{ id: section.value.id, content: section.value.content }]
  await updateSections(props.resumeId, data)
}
</script>
