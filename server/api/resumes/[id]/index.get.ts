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
      styles: true,
      sections: {
        orderBy: [
          { column: 'asc' },
          { order: 'asc' }
        ]
      }
    }
  })

  return { ...data, header: data.header! }
})
