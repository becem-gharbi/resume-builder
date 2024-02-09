<template>
  <div>
    <NForm ref="formRef" :rules="rules" :model="model" @submit.prevent="onSubmit(handleSubmit)">
      <NFormItem label="Resume Title" path="title" :show-require-mark="false">
        <NInput v-model:value="model.title" />
      </NFormItem>

      <NFormItem label="Job Title" path="headerTitle" :show-require-mark="false">
        <NInput v-model:value="model.header!.title" />
      </NFormItem>

      <NFormItem label="Name" path="headerName" :show-require-mark="false">
        <NInput v-model:value="model.header!.name" />
      </NFormItem>

      <NFormItem label="Email" path="headerEmail" :show-require-mark="false">
        <NInput v-model:value="model.header!.email" />
      </NFormItem>

      <NFormItem label="Phone" path="headerPhone" :show-require-mark="false">
        <NInput v-model:value="model.header!.phone" />
      </NFormItem>

      <NFormItem label="Location" path="headerLocation" :show-require-mark="false">
        <NInput v-model:value="model.header!.location" />
      </NFormItem>

      <FormButtons :loading="pending" :disabled="!edited || pending" @reset="reset" />
    </NForm>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{ resume: Resume }>()
const emits = defineEmits(['update:resume'])

const model = ref(props.resume)

const { formRef, rules, pending, apiErrors, edited, reset, onSubmit } = useNaiveForm(model)

apiErrors.value = {
  resumeTitleExists: false
}

rules.value = {
  resumeTitle: [
    {
      required: true,
      message: 'Please input resume title'
    },
    {
      message: 'Already exists',
      validator: () => !apiErrors.value.resumeTitleExists
    }
  ]
}

async function handleSubmit () {
  await useResume().update(model.value.id, {
    title: model.value.title,
    header: model.value.header
  })
  emits('update:resume', model.value)
}
</script>
