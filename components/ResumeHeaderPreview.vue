<template>
  <div class="flex">
    <div class="flex flex-col gap-2 flex-grow">
      <NText class="text-2xl font-semibold">
        {{ resume.header.name }}
      </NText>
      <NText class="text-base text-blue-700">
        {{ resume.header.title }}
      </NText>
      <div class="flex mt-2 gap-4">
        <TextIcon v-if="resume.header.phone" icon="ph:phone-duotone">
          {{ resume.header.phone }}
        </TextIcon>
        <TextIcon v-if="resume.header.email " icon="ph:envelope-duotone">
          {{ resume.header.email }}
        </TextIcon>
        <TextIcon v-if="resume.header.location" icon="ph:map-pin-duotone">
          {{ resume.header.location }}
        </TextIcon>
      </div>
    </div>

    <div v-if="resume.header.photo" class="overflow-hidden rounded-full w-28 h-28">
      <img :src="resume.header.photo" class="w-28 h-28 object-cover" alt="avatar">
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ resume: Resume }>()
</script>
