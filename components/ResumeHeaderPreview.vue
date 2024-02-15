<template>
  <div class="flex">
    <div class="flex flex-col gap-2 flex-grow">
      <label class="text-2xl font-semibold">
        {{ resume.header.name }}
      </label>
      <label class="text-base opacity-95">
        {{ resume.header.title }}
      </label>
      <div class="flex mt-2 gap-4 opacity-85">
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
