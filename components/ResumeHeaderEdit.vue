<template>
  <NForm ref="formRef" :model="model" @submit.prevent="onSubmit(handleSubmit)">
    <NFormItem label="Name">
      <NInput v-model:value="model.header.name" />
    </NFormItem>

    <NFormItem label="Job Title">
      <NInput v-model:value="model.header.title" />
    </NFormItem>

    <NFormItem label="Email">
      <NInput v-model:value="model.header.email" />
    </NFormItem>

    <NFormItem label="Phone">
      <NInput v-model:value="model.header.phone" />
    </NFormItem>

    <NFormItem label="Location">
      <NInput v-model:value="model.header.location" />
    </NFormItem>

    <NFormItem label="Photo">
      <n-checkbox v-model:checked="showPhoto">
        Show
      </n-checkbox>
    </NFormItem>

    <FormButtons :loading="pending" :disabled="!edited || pending" @reset="reset()" />
  </NForm>
</template>

<script setup lang="ts">
const props = defineProps<{ resume: Resume }>()
const emits = defineEmits(['update:resume'])
const { updateHeader } = useResume()

const model = ref(props.resume)

const { formRef, pending, edited, reset, onSubmit } = useNaiveForm(model)

const showPhoto = computed<boolean>({
  get: () => !!model.value.header.photo,
  set: (value) => {
    if (value) {
      model.value.header.photo = useAuthSession().user.value?.picture ?? null
    } else {
      model.value.header.photo = null
    }
  }
})

async function handleSubmit () {
  await updateHeader(model.value.id, model.value.header)

  emits('update:resume', model.value)
}
</script>
