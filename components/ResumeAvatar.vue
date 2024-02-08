<template>
  <div>
    <img v-if="resumeData.photo" :src="resumeData.photo" alt="avatar">
    <NaiveIcon
      v-else
      name="ph:user"
      :size="90"
      color="#e5e7eb"
      icon-color="#4b5563"
      :border-radius="45"
    />
  </div>
</template>

<script setup lang="ts">
const resumeData = useResumeData()
</script>
