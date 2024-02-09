<template>
  <div class="md:w-1/2 md:mx-auto">
    <NPageHeader>
      <template #title>
        <TextEditable :value="resume.title" @update:value="updateTitle" />
      </template>

      <template #extra>
        <div class="flex gap-2">
          <NuxtLink :to="`/resumes/${resume.id}/preview`" target="_blank">
            <NButton type="primary">
              <template #icon>
                <NaiveIcon name="ph:eye" />
              </template>
              Preview
            </NButton>
          </NuxtLink>

          <NButton type="error" @click="onDelete">
            Delete
          </NButton>
        </div>
      </template>
    </NPageHeader>

    <ResumeHeaderForm v-model:resume="resume" class="mt-8" />
  </div>
</template>

<script setup>
const { data: resume } = await useAsyncData(() => useResume().get(useRoute().params.id))

async function onDelete () {
  await useResume().remove(resume.value.id)
  return navigateTo('/')
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
