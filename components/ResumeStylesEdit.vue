<template>
  <NForm ref="formRef" :model="model" @submit.prevent="onSubmit(handleSubmit)">
    <NFormItem label="Font family">
      <NInput v-model:value="model.styles.fontFamily" placeholder="Font name from https://fonts.google.com" />
    </NFormItem>

    <NFormItem label="Color">
      <NInput v-model:value="model.styles.color" placeholder="Text color" />
    </NFormItem>

    <NFormItem label="Padding">
      <NInput v-model:value="model.styles.padding" placeholder="Page padding" />
    </NFormItem>

    <FormButtons :loading="pending" :disabled="!edited || pending" @reset="reset()" />
  </NForm>
</template>

<script setup lang="ts">
const props = defineProps<{ resume: Resume }>()
const emits = defineEmits(['update:resume'])
const { updateStyles } = useResume()

const model = ref(props.resume)

model.value.styles ||= {
  resumeId: '',
  id: '',
  fontFamily: 'Rubik',
  color: 'Black',
  padding: '16px'
}

const { formRef, pending, edited, reset, onSubmit } = useNaiveForm(model)

async function handleSubmit () {
  await updateStyles(model.value.id, model.value.styles)

  emits('update:resume', model.value)
}
</script>
