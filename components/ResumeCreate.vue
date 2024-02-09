<template>
  <div class="rounded-lg border-2 dark:border-slate-800 w-40 h-60 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer flex items-center justify-center" @click="onCreate">
    <NaiveIcon name="ph:plus-circle" :size="42" icon-color="#94a3b8" />
  </div>
</template>

<script setup>
async function onCreate () {
  const { id } = await useResume().create()
  return navigateTo(`/resumes/${id}`)
}
</script>
