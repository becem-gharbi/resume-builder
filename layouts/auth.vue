<template>
  <div class="page justify-center items-center p-7">
    <NuxtLink to="/" class="flex items-center gap-2">
      <NaiveIcon name="ph:read-cv-logo" :size="25" />
      <NText strong class="text-lg">
        Resume Builder
      </NText>
    </NuxtLink>

    <n-text class="text-base font-medium mt-1 text-center" depth="3">
      {{ title }}
    </n-text>

    <div class="w-full my-auto sm:max-w-sm sm:p-6 sm:shadow-md sm:rounded-md">
      <slot />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const title = computed(() => {
  switch (route.name) {
    case 'auth-login':
      return 'Login to your account'

    case 'auth-register':
      return 'Create your account'

    case 'auth-request-password-reset':
      return 'Request password reset'

    case 'auth-reset-password':
      return 'Reset your password'

    case 'auth-verify-email':
      return 'Email verification'
  }
})
</script>

<style scoped>
.page {
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
