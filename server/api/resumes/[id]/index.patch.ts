export default defineEventHandler(async (event) => {
  const { userId } = checkUser(event)

  const id = event.context.params!.id

  const body = await readBody<Partial<Resume>>(event)

  if (!body.title) {
    throw createError({
      statusCode: 400,
      message: 'Title required'
    })
  }

  return event.context.prisma.resume.update({
    where: {
      userId,
      id
    },
    data: {
      title: body.title
    }
  }).catch((e) => {
    if (e.code === 'P2002') {
      throw createError({
        statusCode: 409,
        message: 'Title already used'
      })
    } throw e
  })
})
