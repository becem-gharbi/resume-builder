export function useResume () {
  const { $auth } = useNuxtApp()

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

  async function update (id: string, data: Partial<Resume>) {
    return await $auth.fetch(`/api/resumes/${id}`, {
      method: 'patch',
      body: data
    })
  }

  async function getAll () {
    return await $auth.fetch('/api/resumes')
  }

  async function get (id: string) {
    return await $auth.fetch(`/api/resumes/${id}`)
  }

  return { get, getAll, update, remove, create }
}
