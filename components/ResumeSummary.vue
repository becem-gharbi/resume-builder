<template>
  <NText>
    {{ resumeData.summary }}
  </NText>
</template>

<script setup lang="ts">
const resumeData = useResumeData()
</script>
