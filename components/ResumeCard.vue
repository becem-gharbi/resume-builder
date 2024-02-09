<template>
  <NuxtLink :to="`/resumes/${id}`">
    <div class="border-2 w-40 h-60 hover:bg-slate-100 cursor-pointer flex items-center justify-center">
      <NText class="text-base">
        {{ title }}
      </NText>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{id: string, title:string}>()
</script>
