<template>
  <div class="md:w-1/2 md:mx-auto flex flex-col gap-4">
    <NCard title="Profile" segmented size="small">
      <AccountProfile />
    </NCard>

    <NCard v-if="user?.provider === 'default'" title="Password" segmented size="small">
      <AccountPassword />
    </NCard>

    <NCard title="Preferences" segmented size="small">
      <AccountPreferences />
    </NCard>

    <NCard title="Sessions" segmented size="small">
      <AccountSessions />
    </NCard>
  </div>
</template>

<script setup>
const { user } = useAuthSession()
</script>
