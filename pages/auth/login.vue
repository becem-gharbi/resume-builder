<template>
  <div>
    <NForm ref="formRef" :rules="rules" :model="model" @submit.prevent="onSubmit(handleSubmit)">
      <NFormItem label="Email" path="email" :show-require-mark="false">
        <NInput v-model:value="model.email" :input-props="{ autocomplete: 'username' }" />
      </NFormItem>

      <NFormItem path="password" :show-require-mark="false" :label-style="{ display: 'block' }">
        <NInput
          v-model:value="model.password"
          type="password"
          show-password-on="click"
          :input-props="{ autocomplete: 'current-password' }"
        />
        <template #label>
          <span>Password</span>
          <NuxtLink to="/auth/request-password-reset" class="no-underline float-end">
            <NText type="primary">
              Forgot password?
            </NText>
          </NuxtLink>
        </template>
      </NFormItem>

      <div class="flex flex-col gap-4">
        <NButton attr-type="submit" block :loading="pending" :disabled="pending" type="primary">
          Login
        </NButton>

        <NuxtLink to="/auth/register">
          <NButton attr-type="button" block>
            Create Account
          </NButton>
        </NuxtLink>
      </div>
    </NForm>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'guest',
  auth: false,
  colorMode: 'light',
  layout: 'auth'
})

const { formRef, rules, pending, apiErrors, onSubmit } = useNaiveForm()
const { login } = useAuth()

const model = ref({
  email: '',
  password: ''
})

apiErrors.value = {
  wrongCredentials: false,
  invalidProvider: false,
  accountNotVerified: false,
  accountSuspended: false
}

rules.value = {
  email: [
    {
      required: true,
      message: 'Please input your email',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: 'Should be a valid email address'
    },
    {
      message: 'Wrong credentials',
      validator: () => !apiErrors.value.wrongCredentials
    },
    {
      message: 'Your account is not verified',
      validator: () => !apiErrors.value.accountNotVerified
    },
    {
      message: 'Your account is suspended',
      validator: () => !apiErrors.value.accountSuspended
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input your password',
      trigger: 'blur'
    }
  ]
}

async function handleSubmit () {
  const { error } = await login({
    email: model.value.email,
    password: model.value.password
  })

  if (error.value) {
    apiErrors.value.wrongCredentials = error.value.data?.message === 'wrong-credentials'
    apiErrors.value.accountNotVerified = error.value.data?.message === 'account-not-verified'
    apiErrors.value.accountSuspended = error.value.data?.message === 'account-suspended'
  }
}
</script>
