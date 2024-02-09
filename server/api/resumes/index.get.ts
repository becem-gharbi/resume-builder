export default defineEventHandler((event) => {
  const { userId } = checkUser(event)

  return event.context.prisma.resume.findMany({
    where: {
      userId
    },
    include: {
      header: true,
      sections: true
    }
  })
})
