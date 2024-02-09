import type { H3Event } from 'h3'

export function checkUser (event: H3Event) {
  if (event.context.auth) {
    return event.context.auth
  }

  throw createError({
    message: 'unauthorized',
    statusCode: 401
  })
}
