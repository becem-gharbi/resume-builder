<template>
  <NForm ref="formRef" :model="model" @submit.prevent="onSubmit(handleSubmit)">
    <NFormItem label="Name">
      <NInput v-model:value="model.name" />
    </NFormItem>

    <NFormItem label="Job Title">
      <NInput v-model:value="model.title" />
    </NFormItem>

    <NFormItem label="Email">
      <NInput v-model:value="model.email" />
    </NFormItem>

    <NFormItem label="Phone">
      <NInput v-model:value="model.phone" />
    </NFormItem>

    <NFormItem label="Location">
      <NInput v-model:value="model.location" />
    </NFormItem>

    <NCheckbox v-model:checked="showPhoto" label="Show Photo" class="mb-8" />

    <FormButtons :loading="pending" :disabled="!edited || pending" @reset="reset()" />
  </NForm>
</template>

<script setup lang="ts">
const props = defineProps<{ header: Header, resumeId: Resume['id'] }>()
const emits = defineEmits(['update:header'])
const { updateHeader } = useResume()

const model = ref(props.header)

const { formRef, pending, edited, reset, onSubmit } = useNaiveForm(model)

const showPhoto = computed<boolean>({
  get: () => !!model.value.photo,
  set: (value) => {
    if (value) {
      model.value.photo = useAuthSession().user.value?.picture ?? null
    } else {
      model.value.photo = null
    }
  }
})

async function handleSubmit () {
  await updateHeader(props.resumeId, model.value)

  emits('update:header', model.value)
}
</script>
