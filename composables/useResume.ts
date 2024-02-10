export function useResume () {
  const { $auth } = useNuxtApp()

  // Used to sync changes between edit and preview pages
  let broadcastChannel: BroadcastChannel | undefined

  function getBroadcastChannel (id: string) {
    if (process.client) {
      broadcastChannel ||= new BroadcastChannel(`resume:${id}`)
    }
    return broadcastChannel
  }

  async function create () {
    return await $auth.fetch('/api/resumes', {
      method: 'post'
    })
  }

  async function remove (id: string) {
    return await $auth.fetch(`/api/resumes/${id}`, {
      method: 'delete'
    })
  }

  async function getAll () {
    return await $auth.fetch('/api/resumes')
  }

  async function get (id: string) {
    return await $auth.fetch<Resume>(`/api/resumes/${id}`)
  }

  async function update (id: string, data: Partial<Resume>) {
    await $auth.fetch(`/api/resumes/${id}`, {
      method: 'patch',
      body: data
    })
    getBroadcastChannel(id)?.postMessage('refresh')
  }

  async function updateHeader (id:string, data:Partial<Header>) {
    await $auth.fetch(`/api/resumes/${id}/header`, {
      method: 'patch',
      body: data
    })
    getBroadcastChannel(id)?.postMessage('refresh')
  }

  async function updateSections (id:string, data:Partial<Section>[]) {
    await $auth.fetch(`/api/resumes/${id}/sections`, {
      method: 'patch',
      body: data
    })
    getBroadcastChannel(id)?.postMessage('refresh')
  }

  function onUpdate (id: string, cb: () => any) {
    getBroadcastChannel(id)?.addEventListener('message', cb)
  }

  onUnmounted(() => {
    broadcastChannel?.close()
  })

  return { get, getAll, update, remove, create, updateHeader, updateSections, onUpdate }
}
