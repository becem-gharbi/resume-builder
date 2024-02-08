<template>
  <div>
    <NUpload
      class="overflow-hidden w-min mx-auto my-4"
      list-type="image-card"
      :max="1"
      accept="image/*"
      :custom-request="(e) => (model.file = e.file.file)"
    >
      <img v-if="model.picture" :src="model.picture" class="object-cover" alt="avatar">
    </NUpload>

    <NForm ref="formRef" class="flex-1" @submit.prevent="onSubmit(updateAccount)">
      <NFormItem label="Name">
        <NInput v-model:value="model.name" />
      </NFormItem>

      <div class="flex gap-2">
        <NButton attr-type="reset" :disabled="pending || !edited" @click="reset">
          Reset
        </NButton>

        <NButton attr-type="submit" :loading="pending" :disabled="pending || !edited" type="primary">
          Update
          profile
        </NButton>
      </div>
    </NForm>
  </div>
</template>

<script setup lang="ts">
const { user } = useAuthSession()
const { upload } = useS3Object()
const { fetchUser } = useAuth()

const model = ref({
  name: user.value?.name,
  picture: user.value?.picture,
  file: null as File | null
})

const { edited, pending, onSubmit, reset, formRef } = useNaiveForm(model)

async function updateAccount () {
  if (model.value.file) {
    const url = await upload(model.value.file, {
      url: model.value.picture,
      prefix: `${user.value!.id}/`,
      meta: {
        'user-id': user.value!.id
      }
    })

    model.value.picture = url
  }

  await useNuxtApp().$auth.fetch('/api/user', {
    method: 'patch',
    body: {
      name: model.value.name,
      picture: model.value.picture
    }
  })

  model.value.file = null

  await fetchUser()
}
</script>
