<template>
  <div class="border-2 w-40 h-60 hover:bg-slate-100  cursor-pointer flex items-center justify-center" @click="onCreate">
    <NaiveIcon name="ph:plus-circle" :size="42" icon-color="#94a3b8" />
  </div>
</template>

<script setup>
async function onCreate () {
  const { id } = await useResume().create()
  return navigateTo(`/resumes/${id}`)
}
</script>
