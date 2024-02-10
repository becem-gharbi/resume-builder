<template>
  <div>
    <div class="flex flex-col gap-3 flex-grow">
      <NText class="text-2xl font-semibold">
        {{ resume.header.name }}
      </NText>
      <NText class="text-base">
        {{ resume.header.title }}
      </NText>
      <div class="flex gap-4">
        <TextIcon icon="ph:phone-duotone">
          {{ resume.header.phone }}
        </TextIcon>
        <TextIcon icon="ph:envelope-duotone">
          {{ resume.header.email }}
        </TextIcon>
        <TextIcon icon="ph:map-pin-duotone">
          {{ resume.header.location }}
        </TextIcon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ resume: Resume }>()
</script>
