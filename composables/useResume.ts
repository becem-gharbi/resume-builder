export function useResume () {
  const { $auth } = useNuxtApp()

  function broadcastMessage (id: Resume['id'], message: string) {
    const broadcastChannel = new BroadcastChannel(`resume:${id}`)
    broadcastChannel.postMessage(message)
    broadcastChannel.close()
  }

  function onUpdate (id: Resume['id'], cb: () => any) {
    const broadcastChannel = new BroadcastChannel(`resume:${id}`)
    broadcastChannel.addEventListener('message', cb)
    return broadcastChannel
  }

  async function create () {
    return await $auth.fetch('/api/resumes', {
      method: 'post'
    })
  }

  async function remove (id: Resume['id']) {
    return await $auth.fetch(`/api/resumes/${id}`, {
      method: 'delete'
    })
  }

  async function getAll () {
    return await $auth.fetch('/api/resumes')
  }

  async function get (id: Resume['id']) {
    return await $auth.fetch<Resume>(`/api/resumes/${id}`)
  }

  async function update (id: Resume['id'], data: Partial<Resume>) {
    await $auth.fetch(`/api/resumes/${id}`, {
      method: 'patch',
      body: data
    })
    broadcastMessage(id, 'refresh')
  }

  async function updateHeader (id:Resume['id'], data:Partial<Header>) {
    await $auth.fetch(`/api/resumes/${id}/header`, {
      method: 'patch',
      body: data
    })
    broadcastMessage(id, 'refresh')
  }

  async function updateSections (id:Resume['id'], data:Partial<Section>[]) {
    await $auth.fetch(`/api/resumes/${id}/sections`, {
      method: 'patch',
      body: data
    })
    broadcastMessage(id, 'refresh')
  }

  async function updateStyles (id:Resume['id'], data:Partial<Styles>) {
    await $auth.fetch(`/api/resumes/${id}/styles`, {
      method: 'patch',
      body: data
    })
    broadcastMessage(id, 'refresh')
  }

  return { get, getAll, update, remove, create, updateHeader, updateSections, onUpdate, updateStyles }
}
