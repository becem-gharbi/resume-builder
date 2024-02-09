<template>
  <div @click="showInput = true">
    <NInput v-if="showInput" v-model:value="text" @keyup="onKeyup" />
    <NText v-else>
      {{ value }}
    </NText>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ value: string }>()
const emits = defineEmits(['update:value'])
const text = ref(props.value)
const showInput = ref(false)

function onKeyup (event: { key: string }) {
  if (event.key === 'Enter') {
    showInput.value = false
    emits('update:value', text.value.trim())
  }
}
</script>
