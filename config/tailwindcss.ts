import type { ModuleOptions } from '@nuxtjs/tailwindcss'

export const tailwindcss: Partial<ModuleOptions> = {
  viewer: false,
  exposeConfig: {
    write: true
  }
}
