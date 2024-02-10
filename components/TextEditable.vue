<template>
  <div class="w-fit" @click="showInput = true">
    <NInput v-if="showInput" v-model:value="text" size="small" @keyup="onKeyup" />
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
    text.value = text.value.trim() || '--'

    if (props.value !== text.value) {
      emits('update:value', text.value)
    }
  }
}
</script>
