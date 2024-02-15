<template>
  <NCard class="md:w-1/2 md:mx-auto" title="Account">
    <NTabs type="card">
      <NTabPane name="Profile">
        <template #tab>
          <TextIcon icon="ph:user">
            Profile
          </TextIcon>
        </template>
        <AccountProfile />
      </NTabPane>

      <NTabPane v-if="user?.provider === 'default'" name="Security">
        <template #tab>
          <TextIcon icon="ph:lock-key">
            Security
          </TextIcon>
        </template>
        <AccountPassword />
      </NTabPane>

      <NTabPane name="Sessions" tab="Sessions">
        <template #tab>
          <TextIcon icon="ph:cards">
            Sessions
          </TextIcon>
        </template>
        <AccountSessions />
      </NTabPane>
    </NTabs>
  </NCard>
</template>

<script setup>
const { user } = useAuthSession()
</script>
