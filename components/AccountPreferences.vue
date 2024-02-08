<template>
  <NForm>
    <NFormItem label="Color Mode">
      <NSelect v-model:value="preference" :options="colorModeSelectOptions" />
    </NFormItem>
  </NForm>
</template>

<script setup lang="ts">
import type { SelectOption } from 'naive-ui'

const { colorModePreference } = useNaiveColorMode()

const preference = computed({
  get: () => colorModePreference.get(),
  set: value => colorModePreference.set(value)
})

const colorModeSelectOptions = ref<SelectOption[]>([
  {
    label: 'Light',
    value: 'light'
  },
  {
    label: 'Dark',
    value: 'dark'
  }, {
    label: 'System',
    value: 'system'
  }
])
</script>
