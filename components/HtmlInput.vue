<template>
  <NInput
    v-model:value="content"
    type="textarea"
    class="bg-inherit w-full p-2 border-none"
    autosize
    @input="onInput"
  />
</template>

<script setup lang="ts">
import jsBeautify from 'js-beautify'

const props = defineProps<{ value: string }>()
const emits = defineEmits(['update:value'])

const content = ref(props.value)

const onInput = inputDebounce(() => {
  content.value = jsBeautify.html_beautify(content.value)
  emits('update:value', content.value)
}, 3000)

function inputDebounce (fn: (value: any) => void, interval: number) {
  let timer: NodeJS.Timeout

  return function (value: any) {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(() => fn(value), interval)
  }
}
</script>
