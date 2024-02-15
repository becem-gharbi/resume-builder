<template>
  <NForm ref="formRef" :model="model" @submit.prevent="onSubmit(handleSubmit)">
    <NFormItem label="Font family">
      <NInput v-model:value="model.styles.fontFamily" placeholder="Font name from https://fonts.google.com" />
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
  fontFamily: ''
}

const { formRef, pending, edited, reset, onSubmit } = useNaiveForm(model)

async function handleSubmit () {
  await updateStyles(model.value.id, model.value.styles)

  emits('update:resume', model.value)
}
</script>
