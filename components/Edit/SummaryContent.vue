<template>
  <NInput v-model:value="content" type="textarea" @input="onInput" />
</template>

<script setup lang="ts">
const props = defineProps<{ section: Section }>()
const emits = defineEmits(['update:content'])

const content = ref(props.section.content)

const onInput = inputDebounce(() => emits('update:content', content.value), 4000)

function inputDebounce (fn: (value: any) => void, interval: number) {
  let timer: NodeJS.Timeout

  return function (value: any) {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(() => fn(value), interval)
  }
}
</script>
