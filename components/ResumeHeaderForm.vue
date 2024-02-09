<template>
  <NForm ref="formRef" :model="model" @submit.prevent="onSubmit(handleSubmit)">
    <UploadImage
      ref="uploadRef"
      class="mb-2 mx-auto shadow hover:shadow-lg border-blue-300 border-2"
      :src="model.header?.photo ?? undefined"
      :width="140"
      @select="(f:File)=> model.file=f"
    />

    <NFormItem label="Name">
      <NInput v-model:value="model.header!.name" />
    </NFormItem>

    <NFormItem label="Job Title">
      <NInput v-model:value="model.header!.title" />
    </NFormItem>

    <NFormItem label="Email">
      <NInput v-model:value="model.header!.email" />
    </NFormItem>

    <NFormItem label="Phone">
      <NInput v-model:value="model.header!.phone" />
    </NFormItem>

    <NFormItem label="Location">
      <NInput v-model:value="model.header!.location" />
    </NFormItem>

    <FormButtons :loading="pending" :disabled="!edited || pending" @reset="handleReset" />
  </NForm>
</template>

<script setup lang="ts">
const uploadRef = ref()
const props = defineProps<{ resume: Resume }>()
const emits = defineEmits(['update:resume'])

const model = ref({
  ...props.resume,
  file: null as File | null
})

const { formRef, pending, edited, reset, onSubmit } = useNaiveForm(model)

function handleReset () {
  uploadRef.value.reset()
  reset()
}

async function handleSubmit () {
  const { user } = useAuthSession()

  if (model.value.file) {
    const url = await useS3Object().upload(model.value.file, {
      url: model.value.header?.photo ?? undefined,
      prefix: `${user.value!.id}/`,
      meta: {
        'user-id': user.value!.id
      }
    })

    model.value.header!.photo = url
    model.value.file = null
  }

  await useResume().update(model.value.id, {
    title: model.value.title,
    header: model.value.header
  })

  emits('update:resume', model.value)
}
</script>
