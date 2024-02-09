<template>
  <div>
    <NResult
      v-if="success"
      status="success"
      title="Done"
      description="We've sent you a secure link to reset your password"
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
      <NForm ref="formRef" :rules="rules" :model="model" @submit.prevent="onSubmit(handleSubmit)">
        <NFormItem label="Email" path="email" :show-require-mark="false">
          <NInput v-model:value="model.email" :input-props="{ autocomplete: 'username' }" />
        </NFormItem>

        <NButton block attr-type="submit" :loading="pending" type="primary">
          <template #icon>
            <NaiveIcon name="ph:arrows-counter-clockwise-duotone" />
          </template>
          Reset password
        </NButton>
      </NForm>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'guest',
  layout: 'auth',
  auth: false,
  colorMode: 'light'
})

const { formRef, rules, pending, onSubmit } = useNaiveForm()
const { requestPasswordReset } = useAuth()

const success = ref(false)

const model = ref({
  email: ''
})

rules.value = {
  email: [
    {
      required: true,
      message: 'Please input your email',
      trigger: 'input'
    },
    {
      type: 'email',
      message: 'Please enter a valid email',
      trigger: 'blur'
    }
  ]
}

async function handleSubmit () {
  const { error } = await requestPasswordReset(model.value.email)

  if (!error.value) {
    success.value = true
  }
}
</script>
