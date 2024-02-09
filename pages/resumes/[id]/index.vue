<template>
  <NCard class="md:w-2/3 md:mx-auto">
    <template #header>
      <TextEditable :value="resume.title" @update:value="updateTitle" />
    </template>

    <template #header-extra>
      <div class="flex gap-2">
        <NuxtLink :to="`/resumes/${resume.id}/preview`" target="_blank">
          <NButton tertiary>
            <template #icon>
              <NaiveIcon name="ph:eye" />
            </template>
          </NButton>
        </NuxtLink>

        <NButton tertiary @click="onDelete">
          <template #icon>
            <NaiveIcon name="ph:trash" />
          </template>
        </NButton>
      </div>
    </template>

    <NTabs type="line">
      <NTabPane name="Header" tab="Header">
        <ResumeHeaderForm
          v-model:resume="resume"
          @update:resume="broadcastChannel.postMessage('refresh')"
        />
      </NTabPane>
      <NTabPane name="Sections" tab="Sections">
        <ResumeSections v-model:resume="resume" />
      </NTabPane>
    </NTabs>
  </NCard>
</template>

<script setup>
const { data: resume } = await useAsyncData(() => useResume().get(useRoute().params.id))

const dialog = useDialog()

const broadcastChannel = process.client && new BroadcastChannel(`resume:${resume.value.id}`)

function onDelete () {
  dialog.error({
    title: 'Delete the resume',
    positiveText: 'Yes',
    negativeText: 'No',
    onPositiveClick: () => {
      useResume().remove(resume.value.id).then(() => navigateTo('/'))
    }
  })
}

async function updateTitle (newTitle) {
  await useResume().update(resume.value.id, { title: newTitle })
    .then(() => { resume.value.title = newTitle })
    .catch(e => useNaiveNotification().create({
      type: 'error',
      content: e.data.message,
      duration: 5000
    }))
}
</script>
