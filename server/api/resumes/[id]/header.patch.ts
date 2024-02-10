export default defineEventHandler(async (event) => {
  const { userId } = checkUser(event)

  const id = event.context.params!.id

  const body = await readBody<Partial<Header>>(event)

  return event.context.prisma.header.update({
    where: {
      id: body.id,
      resume: {
        id,
        userId
      }
    },
    data: {
      title: body.title,
      email: body.email,
      location: body.location,
      name: body.name,
      phone: body.phone,
      photo: body.photo
    }
  })
})
