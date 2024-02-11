<template>
  <div class="flex flex-col gap-6">
    <NText class="text-base font-semibold">
      HTML Editor
    </NText>

    <div class="flex gap-4 h-60">
      <NInput
        v-model:value="content"
        type="textarea"
        autosize
        :style="{width:'280px'}"
        placeholder="HTML content"
        @input="onInput"
      />
      <n-scrollbar :style="{width:'340px'}" class="border p-2 border-slate-200 dark:border-slate-800 rounded">
        <span v-html="content" />
      </n-scrollbar>
    </div>

    <FormButtons @submit="$emit('update:value', content)" @reset="$emit('cancel')" />
  </div>
</template>

<script setup lang="ts">
import jsBeautify from 'js-beautify'

const props = defineProps<{ value: string }>()
defineEmits(['update:value', 'cancel'])

const content = ref(props.value)

content.value = jsBeautify.html_beautify(content.value)

const onInput = debounce(() => {
  content.value = jsBeautify.html_beautify(content.value)
}, 2000)

function debounce (fn: (value: any) => void, interval: number) {
  let timer: NodeJS.Timeout

  return function (value: any) {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(() => fn(value), interval)
  }
}
</script>
