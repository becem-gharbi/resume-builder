<template>
  <div class="md:w-1/2 md:mx-auto">
    <NPageHeader>
      <template #title>
        {{ resume.title }}
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

    <ResumeForm v-model:resume="resume" class="mt-8" />
  </div>
</template>

<script setup>
const { data: resume } = await useAsyncData(() => useResume().get(useRoute().params.id))

async function onDelete () {
  await useResume().remove(resume.value.id)
  return navigateTo('/')
}
</script>
