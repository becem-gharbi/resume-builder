export default defineEventHandler((event) => {
  const { userId } = checkUser(event)

  const id = event.context.params!.id

  return event.context.prisma.resume.findUniqueOrThrow({
    where: {
      id,
      userId
    },
    include: {
      header: true,
      sections: true
    }
  })
})
