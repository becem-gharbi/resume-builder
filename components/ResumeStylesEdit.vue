<template>
  <NForm ref="formRef" :model="model" @submit.prevent="onSubmit(handleSubmit)">
    <NFormItem label="Font family">
      <NInput v-model:value="model.fontFamily" placeholder="Font name from https://fonts.google.com" />
    </NFormItem>

    <NFormItem label="Color">
      <NInput v-model:value="model.color" placeholder="Text color" />
    </NFormItem>

    <NFormItem label="Padding">
      <NInput v-model:value="model.padding" placeholder="Page padding" />
    </NFormItem>

    <FormButtons :loading="pending" :disabled="!edited || pending" @reset="reset()" />
  </NForm>
</template>

<script setup lang="ts">
const props = defineProps<{ styles: Styles, resumeId: Resume['id'] }>()
const emits = defineEmits(['update:styles'])
const { updateStyles } = useResume()

const model = ref(props.styles)

const { formRef, pending, edited, reset, onSubmit } = useNaiveForm(model)

async function handleSubmit () {
  await updateStyles(props.resumeId, model.value)

  emits('update:styles', model.value)
}
</script>
