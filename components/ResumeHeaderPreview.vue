<template>
  <div class="flex">
    <div class="flex flex-col gap-2 flex-grow">
      <label class="text-2xl font-semibold">
        {{ header.name }}
      </label>
      <label class="text-base opacity-95">
        {{ header.title }}
      </label>
      <div class="flex mt-2 gap-4 opacity-85">
        <TextIcon v-if="header.phone" icon="ph:phone-duotone">
          {{ header.phone }}
        </TextIcon>
        <TextIcon v-if="header.email " icon="ph:envelope-duotone">
          {{ header.email }}
        </TextIcon>
        <TextIcon v-if="header.location" icon="ph:map-pin-duotone">
          {{ header.location }}
        </TextIcon>
      </div>
    </div>

    <div v-if="header.photo" class="overflow-hidden rounded-full w-28 h-28">
      <img :src="header.photo" class="w-28 h-28 object-cover" alt="avatar">
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ header: Header }>()
</script>
