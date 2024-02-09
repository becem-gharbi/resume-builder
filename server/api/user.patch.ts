import { handleError } from '#auth'

export default defineEventHandler(async (event) => {
  try {
    const { userId } = checkUser(event)

    const { name, picture } = await readBody(event)

    return await event.context.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        name,
        picture
      },
      select: {
        id: true
      }
    })
  } catch (error) {
    await handleError(error)
  }
})
