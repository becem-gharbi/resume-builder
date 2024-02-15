<template>
  <div class="flex flex-col gap-4">
    <MdEditor
      v-model="content"
      :theme="colorMode"
      language="en-US"
      :style="{padding:'4px'}"
      :html-preview="false"
      :no-upload-img="true"
    />

    <FormButtons @submit="$emit('update:value', content)" @reset="$emit('cancel')" />
  </div>
</template>

<script setup lang="ts">
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const props = defineProps<{ value: string }>()
defineEmits(['update:value', 'cancel'])

const content = ref(props.value)

const { colorMode } = useNaiveColorMode()
const theme = useThemeVars()
</script>

<style scoped>
.md-editor-dark {
  --md-color: v-bind(theme.textColor2);
  --md-border-color: v-bind(theme.borderColor);
  --md-bk-color:  v-bind(theme.modalColor);
  --md-bk-hover-color: v-bind(theme.hoverColor);
  --md-bk-color-outstand: v-bind(theme.bodyColor);
  --md-scrollbar-thumb-color: v-bind(theme.modalColor);
  --md-scrollbar-bg-color: v-bind(theme.hoverColor);
}
</style>
