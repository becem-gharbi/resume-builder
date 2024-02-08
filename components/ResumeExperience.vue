<template>
  <div>
    <NText class="text-base">
      {{ experience.position }}
    </NText>

    <div class="flex items-center mt-2 mb-4">
      <NText class="flex-grow">
        {{ experience.workplace }}
      </NText>

      <TextIcon icon="ph:map-pin-duotone">
        {{ experience.location }}
      </TextIcon>
    </div>

    <n-text>{{ experience.description }}</n-text>
  </div>
</template>

<script setup lang="ts">
defineProps<{ experience: ResumeExperience }>()
</script>
