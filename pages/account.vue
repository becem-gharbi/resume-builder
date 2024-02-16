<template>
  <PageWrapper>
    <template #header>
      Account
    </template>

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
  </PageWrapper>
</template>

<script setup>
const { user } = useAuthSession()
</script>
