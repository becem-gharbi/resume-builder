<template>
  <div>
    <NResult v-if="success" status="success" title="Done" description="Your password is successfully reset">
      <template #footer>
        <NuxtLink to="/auth/login" class="no-underline">
          <NButton type="primary">
            Go back to login
          </NButton>
        </NuxtLink>
      </template>
    </NResult>

    <NResult
      v-else-if="failure"
      status="error"
      title="Failed to reset password"
      description="You do not have permission"
    >
      <template #footer>
        <NuxtLink to="/auth/login" class="no-underline">
          <NButton type="primary">
            Go back to login
          </NButton>
        </NuxtLink>
      </template>
    </NResult>

    <div v-else>
      <NForm ref="formRef" :model="model" :rules="rules" @submit.prevent="onSubmit(handleSubmit)">
        <NFormItem label="Password" path="password" :show-require-mark="false">
          <NInput
            v-model:value="model.password"
            type="password"
            show-password-on="click"
            :input-props="{ autocomplete: 'new-password' }"
          />
        </NFormItem>

        <NFormItem label="Confirm Password" path="passwordConfirm" :show-require-mark="false">
          <NInput
            v-model:value="model.passwordConfirm"
            type="password"
            show-password-on="click"
            :input-props="{ autocomplete: 'new-password' }"
          />
        </NFormItem>

        <NButton attr-type="submit" block :disabled="pending" :loading="pending" type="primary">
          <template #icon>
            <NaiveIcon name="ph:arrows-counter-clockwise-duotone" />
          </template>
          Change password
        </NButton>
      </NForm>
    </div>
  </div>
</template>

<script  setup lang="ts">

definePageMeta({
  middleware: 'guest',
  auth: false,
  colorMode: 'light',
  layout: 'auth'
})

const { formRef, pending, rules, onSubmit } = useNaiveForm()
const { resetPassword } = useAuth()

const success = ref(false)
const failure = ref(false)

const model = ref({
  password: '',
  passwordConfirm: ''
})

rules.value = {
  password: [
    {
      validator: (_, value) => /(?=.*[a-z])(?=.*[0-9])(?=.{6,})/.test(value),
      message: 'At least 6 characters, 1 lowercase, 1 number',
      trigger: 'blur'
    }
  ],
  passwordConfirm: [
    {
      validator: (_, value) => value === model.value.password,
      message: 'Passwords do not match',
      trigger: 'blur'
    }
  ]
}

async function handleSubmit () {
  await resetPassword(model.value.password)
    .then(() => { success.value = true })
    .catch(() => { failure.value = true })
}
</script>
