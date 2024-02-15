<template>
  <NForm ref="formRef" class="flex-1" @submit.prevent="onSubmit(updateAccount)">
    <UploadImage
      ref="uploadRef"
      class="mb-2 mx-auto shadow hover:shadow-lg border-blue-300 border-2"
      :src="model.picture"
      :width="140"
      @select="(f:File)=> model.file=f"
    />

    <NFormItem label="Name">
      <NInput v-model:value="model.name" />
    </NFormItem>

    <NFormItem label="Color Mode">
      <NSelect v-model:value="preference" :options="colorModeSelectOptions" />
    </NFormItem>

    <FormButtons :loading="pending" :disabled="!edited || pending" @reset="onReset()" />
  </NForm>
</template>

<script setup lang="ts">
import { withQuery } from 'ufo'
import type { SelectOption } from 'naive-ui'

const uploadRef = ref()
const { user } = useAuthSession()

const model = ref({
  name: user.value!.name,
  picture: user.value!.picture,
  file: null as File | null
})

const { edited, pending, onSubmit, reset, formRef } = useNaiveForm(model)

function onReset () {
  uploadRef.value.reset()
  reset()
}

async function updateAccount () {
  if (model.value.file) {
    const url = await useS3Object().upload(model.value.file, {
      url: model.value.picture,
      key: `${user.value!.id}/photo`,
      meta: {
        'user-id': user.value!.id
      }
    })

    model.value.picture = withQuery(url, {
      t: new Date().getTime()
    })
  }

  await useNuxtApp().$auth.fetch('/api/user', {
    method: 'patch',
    body: {
      name: model.value.name,
      picture: model.value.picture
    }
  })

  model.value.file = null

  await useAuth().fetchUser()
}

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
