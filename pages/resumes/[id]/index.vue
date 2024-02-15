<template>
  <NCard class="md:w-2/3 md:mx-auto">
    <template #header>
      <TextEditable :value="resume.title" @update:value="updateTitle" />
    </template>

    <template #header-extra>
      <div class="flex gap-2">
        <NuxtLink :to="`/resumes/${resume.id}/preview`" target="_blank">
          <NButton size="small">
            <template #icon>
              <NaiveIcon name="ph:eye" :size="16" />
            </template>
          </NButton>
        </NuxtLink>

        <NButton size="small" @click="onDelete">
          <template #icon>
            <NaiveIcon name="ph:trash" :size="16" />
          </template>
        </NButton>
      </div>
    </template>

    <NTabs type="line">
      <NTabPane name="Styles">
        <template #tab>
          <TextIcon icon="ph:palette">
            Styles
          </TextIcon>
        </template>
        <ResumeStylesEdit v-model:resume="resume" />
      </NTabPane>
      <NTabPane name="Header">
        <template #tab>
          <TextIcon icon="ph:identification-card">
            Header
          </TextIcon>
        </template>
        <ResumeHeaderEdit v-model:resume="resume" />
      </NTabPane>
      <NTabPane name="Sections">
        <template #tab>
          <TextIcon icon="ph:grid-four">
            Sections
          </TextIcon>
        </template>
        <ResumeSectionsEdit v-model:resume="resume" />
      </NTabPane>
    </NTabs>
  </NCard>
</template>

<script setup>
const { data: resume } = await useAsyncData(() => useResume().get(useRoute().params.id))

const dialog = useDialog()
const { update } = useResume()

function onDelete () {
  dialog.error({
    title: 'Delete Resume',
    positiveText: 'Yes',
    negativeText: 'No',
    onPositiveClick: () => {
      useResume().remove(resume.value.id).then(() => navigateTo('/'))
    }
  })
}

async function updateTitle (newTitle) {
  await update(resume.value.id, { title: newTitle })
    .then(() => { resume.value.title = newTitle })
    .catch(e => useNaiveNotification().create({
      type: 'error',
      content: e.data.message,
      duration: 5000
    }))
}
</script>
