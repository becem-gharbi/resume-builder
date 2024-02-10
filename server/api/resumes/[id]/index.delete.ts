export default defineEventHandler((event) => {
  const { userId } = checkUser(event)

  const id = event.context.params!.id

  return event.context.prisma.resume.delete({
    where: {
      userId,
      id
    }
  })
})
