<template>
  <NaiveLayoutNavbar :routes="routes" :drawer-routes="routes">
    <template #start>
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/icon.svg" width="22" height="30" alt="icon">
        <NText strong>
          Resume Builder
        </NText>
      </NuxtLink>
    </template>

    <template #end>
      <div class="notMobileOrTablet">
        <NButton @click="logout()">
          Logout
        </NButton>
      </div>
    </template>

    <template #drawer-header>
      <AccountInfo class="mx-2" />
    </template>

    <template #drawer-footer>
      <NButton secondary block @click="logout()">
        Logout
      </NButton>
    </template>

    <NDialogProvider>
      <div class="flex-1 container mx-auto my-8">
        <slot />
      </div>
    </NDialogProvider>

    <NNotificationProvider placement="bottom-right">
      <NaiveNotification />
    </NNotificationProvider>
  </NaiveLayoutNavbar>
</template>

<script setup lang="ts">
import type { MenuLinkRoute } from '@bg-dev/nuxt-naiveui'
import { AccountInfo } from '#components'

const { logout } = useAuth()

const routes: MenuLinkRoute[] = [
  {
    label: 'Resumes',
    icon: 'ph:folder',
    path: '/'
  },
  {
    label: 'Account',
    icon: 'ph:user',
    path: '/account'
  }
]
</script>
