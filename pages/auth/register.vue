<template>
  <div>
    <NResult v-if="success" status="success" title="Done" description="Account successfully created">
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
        <NFormItem label="First name" path="firstName">
          <NInput v-model:value="model.firstName" />
        </NFormItem>

        <NFormItem label="Last name" path="lastName">
          <NInput v-model:value="model.lastName" />
        </NFormItem>

        <NFormItem label="Email" path="email">
          <NInput v-model:value="model.email" :input-props="{ autocomplete: 'username' }" />
        </NFormItem>

        <NFormItem label="Password" path="password">
          <NInput
            v-model:value="model.password"
            type="password"
            show-password-on="click"
            :input-props="{ autocomplete: 'new-password' }"
          />
        </NFormItem>

        <NFormItem label="Confirm Password" path="passwordConfirm">
          <NInput
            v-model:value="model.passwordConfirm"
            type="password"
            show-password-on="click"
            :input-props="{ autocomplete: 'new-password' }"
          />
        </NFormItem>

        <NButton type="primary" attr-type="submit" block :disabled="pending" :loading="pending">
          Register
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

const { formRef, pending, rules, onSubmit, apiErrors } = useNaiveForm()
const { register } = useAuth()
const success = ref(false)

apiErrors.value = {
  emailAlreadyExists: false
}

const model = ref({
  email: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: ''
})

rules.value = {
  firstName: [
    {
      required: true,
      message: 'Please input your first name',
      trigger: 'blur'
    }
  ],
  lastName: [
    {
      required: true,
      message: 'Please input your last name',
      trigger: 'blur'
    }
  ],
  email: [
    {
      required: true,
      message: 'Please input your email',
      trigger: 'blur'
    },
    {
      validator: () => !apiErrors.value.emailAlreadyExists,
      message: 'Email already exists',
      trigger: 'input'
    },
    {
      type: 'email',
      message: 'Should be a valid email address'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input your password',
      trigger: 'blur'
    },
    {
      validator: (_, value) => /(?=.*[a-z])(?=.*[0-9])(?=.{6,})/.test(value),
      message: 'At least 6 characters, 1 lowercase, 1 number',
      trigger: 'blur'
    }
  ],
  passwordConfirm: [
    {
      required: true,
      message: 'Please confirm your password',
      trigger: 'blur'
    },
    {
      validator: (_, value) => value === model.value.password,
      message: 'Passwords do not match',
      trigger: 'blur'
    }
  ]
}

async function handleSubmit () {
  const { error } = await register({
    email: model.value.email,
    password: model.value.password,
    name: model.value.firstName + ' ' + model.value.lastName
  })

  if (error.value) {
    apiErrors.value.emailAlreadyExists = error.value.data?.message.includes('email-used-with') || false
  } else {
    success.value = true
  }
}
</script>
