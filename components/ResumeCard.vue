<template>
  <NuxtLink :to="`/resumes/${id}`">
    <div class="rounded-lg border-2 border-slate-200 dark:border-slate-800 w-40 h-60 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer flex flex-col gap-4 items-center justify-center">
      <NText class="text-base">
        {{ title }}
      </NText>

      <NText :depth="3">
        <NTime type="relative" :time="new Date(updatedAt)" />
      </NText>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{id: string, title:string, updatedAt: string}>()
</script>
