<template>
  <NList>
    <NListItem v-for="session of sessions" :key="session.id">
      <NThing>
        <template #avatar>
          <NTag :type="session.current ? 'success' : 'warning'" size="small">
            {{ session.current ? 'Current' : 'Active' }}
          </NTag>
        </template>

        <template #header>
          {{
            [
              session.ua && uaParser.UAParser(session.ua).browser.name,
              session.ua && uaParser.UAParser(session.ua).os.name,
              session.ua && uaParser.UAParser(session.ua).device.model
            ]
              .join(' ') }}
        </template>

        <template #header-extra>
          <NButton
            circle
            size="small"
            type="error"
            secondary
            :disabled="session.current"
            @click="handleSessionRevoke(session.id)"
          >
            <template #icon>
              <NaiveIcon name="ph:trash-simple" />
            </template>
          </NButton>
        </template>
      </NThing>
    </NListItem>
  </Nlist>
</template>

<script setup lang="ts">
import uaParser from 'ua-parser-js'

const { getAllSessions, revokeSession } = useAuthSession()

const { data: sessions } = useAsyncData(() => getAllSessions())

async function handleSessionRevoke (id: string) {
  await revokeSession(id)

  sessions.value = sessions.value!.filter(el => el.id !== id)
}
</script>
