import type { ModuleOptions } from '@bg-dev/nuxt-auth'

export const auth: Partial<ModuleOptions> = {
  baseUrl: process.env.NUXT_PUBLIC_AUTH_BASE_URL,

  enableGlobalAuthMiddleware: true,

  accessToken: {
    jwtSecret: process.env.NUXT_AUTH_ACCESS_TOKEN_JWT_SECRET!
  },

  refreshToken: {
    jwtSecret: process.env.NUXT_AUTH_REFRESH_TOKEN_JWT_SECRET!
  },

  redirect: {
    login: '/auth/login',
    logout: '/auth/login',
    home: '/',
    passwordReset: '/auth/reset-password'
  },

  email: {
    from: process.env.NUXT_AUTH_EMAIL_FROM!,
    provider: {
      name: process.env.NUXT_AUTH_EMAIL_PROVIDER_NAME as any,
      apiKey: process.env.NUXT_AUTH_EMAIL_PROVIDER_API_KEY!
    }
  }
}
