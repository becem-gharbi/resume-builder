export default defineEventHandler(async (event) => {
  const { userId } = checkUser(event)

  const resumeCount = await event.context.prisma.resume.count({
    where: {
      userId
    }
  })

  const title = `Resume #${resumeCount + 1}`

  return event.context.prisma.resume.create({
    data: {
      userId,
      title,
      header: {
        create: {}
      }
    }
  })
})
