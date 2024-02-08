<template>
  <div class="flex items-center">
    <div class="flex flex-col gap-3 flex-grow">
      <NText class="text-2xl font-semibold">
        {{ resumeData.name }}
      </NText>
      <NText class="text-base">
        {{ resumeData.title }}
      </NText>
      <div class="flex gap-4">
        <TextIcon icon="ph:phone-duotone">
          {{ resumeData.phone }}
        </TextIcon>
        <TextIcon icon="ph:envelope-duotone">
          {{ resumeData.email }}
        </TextIcon>
        <TextIcon icon="ph:map-pin-duotone">
          {{ resumeData.location }}
        </TextIcon>
      </div>
    </div>

    <ResumeAvatar />
  </div>
</template>

<script setup lang="ts">
const resumeData = useResumeData()
</script>
