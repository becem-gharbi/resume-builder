<template>
  <NCard class="md:w-2/3 md:mx-auto flex flex-col gap-4" title="Account">
    <NTabs type="line">
      <NTabPane name="Profile" tab="Profile">
        <AccountProfile />
      </NTabPane>

      <NTabPane name="Preferences" tab="Preferences">
        <AccountPreferences />
      </NTabPane>

      <NTabPane v-if="user?.provider === 'default'" name="Security" tab="Security">
        <AccountPassword />
      </NTabPane>

      <NTabPane name="Sessions" tab="Sessions">
        <AccountSessions />
      </NTabPane>
    </NTabs>
  </NCard>
</template>

<script setup>
const { user } = useAuthSession()
</script>
