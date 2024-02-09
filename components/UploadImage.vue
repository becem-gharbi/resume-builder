<template>
  <div class="relative rounded-full" :style="{width:`${width}px`}">
    <div class="absolute right-2 bottom-2 border-4 rounded-full" :style="{borderColor: theme.bodyColor}">
      <NButton circle type="primary" size="small" @click="input?.click()">
        <template #icon>
          <NaiveIcon name="ph:camera" />
        </template>
      </NButton>
    </div>

    <div class="overflow-hidden rounded-full" :style="{ height:`${width}px`}">
      <NImage
        class="h-full"
        :width="width"
        :src="image"
        :fallback-src="placeholder"
        object-fit="cover"
      />
    </div>

    <input
      ref="input"
      type="file"
      hidden
      accept="image/*"
      @change="onSelect"
    >
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{ src?: string, width?: number, placeholder?: string }>(), {
  src: '/placeholder.webp',
  placeholder: '/placeholder.webp',
  width: 150
})

const emit = defineEmits(['select'])

const inputImage = computed(() => props.src)

const image = ref(inputImage.value)

const input = ref<HTMLInputElement>()

watch(inputImage, () => reset())

const theme = useThemeVars()

function reset () {
  image.value = inputImage.value
}

function getBase64 (file:File):Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result?.toString())
    reader.onerror = error => reject(error)
  })
}

async function onSelect (event:any) {
  const selectedFile = event.target.files[0]
  const selectedFileUrl = await getBase64(selectedFile)

  if (selectedFileUrl) {
    image.value = selectedFileUrl
    emit('select', selectedFile)
  }
}

defineExpose({ reset })
</script>
