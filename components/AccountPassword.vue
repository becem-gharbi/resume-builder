<template>
  <NForm
    ref="formRef"
    :model="model"
    :rules="rules"
    @submit.prevent="onSubmit(handleChangePassword)"
  >
    <NFormItem label="Current password" path="currentPassword">
      <NInput
        v-model:value="model.currentPassword"
        type="password"
        show-password-on="click"
      />
    </NFormItem>

    <NFormItem label="New password" path="newPassword">
      <NInput
        v-model:value="model.newPassword"
        type="password"
        show-password-on="click"
        :input-props="{ autocomplete: 'new-password' }"
      />
    </NFormItem>

    <FormButtons :loading="pending" :disabled="!edited || pending" @reset="reset()" />
  </NForm>
</template>

<script setup lang="ts">
const model = ref({
  currentPassword: '',
  newPassword: ''
})

const { formRef, onSubmit, pending, rules, apiErrors, edited, reset } = useNaiveForm(model)

apiErrors.value = {
  wrongPassword: false
}

rules.value = {
  currentPassword: [
    {
      required: true,
      message: 'Please enter your password',
      trigger: 'input'
    },
    {
      validator: () => !apiErrors.value.wrongPassword,
      message: 'Wrong password',
      trigger: 'input'
    }
  ],
  newPassword: [
    {
      required: true,
      message: 'Please enter your new password',
      trigger: 'input'
    }
  ]
}

async function handleChangePassword () {
  await useAuth().changePassword(model.value).catch((error) => {
    apiErrors.value.wrongPassword = error.data.message === 'wrong-password'
  })
}
</script>
