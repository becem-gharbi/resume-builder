<template>
  <div class="page">
    <div class="flex-1 flex">
      <div class="md:w-1/4 w-full flex flex-col m-8 gap-4">
        <div>
          <NText class="text-lg font-medium">
            Resume Builder
          </NText>
          <br>
          <NText class="text-lg" :depth="3">
            {{ title }}
          </NText>
        </div>

        <div class="w-full my-auto">
          <slot />
        </div>
      </div>

      <div class="md:w-3/4 hidden md:block bg-gradient-to-r from-cyan-500 to-blue-500" />
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
