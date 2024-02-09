export default defineEventHandler(async (event) => {
  const { userId } = checkUser(event)

  const id = event.context.params!.id

  const data = await event.context.prisma.resume.findUniqueOrThrow({
    where: {
      id,
      userId
    },
    include: {
      header: true,
      sections: true
    }
  })

  return { ...data, header: data.header! }
})
