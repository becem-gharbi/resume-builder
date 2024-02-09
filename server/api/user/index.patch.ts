export default defineEventHandler(async (event) => {
  const { userId } = checkUser(event)

  const body = await readBody(event)

  return event.context.prisma.user.update({
    where: {
      id: userId
    },
    data: {
      name: body.name,
      picture: body.picture
    },
    select: {
      id: true
    }
  })
})
