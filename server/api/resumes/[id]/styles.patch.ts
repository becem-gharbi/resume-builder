export default defineEventHandler(async (event) => {
  const { userId } = checkUser(event)

  const id = event.context.params!.id

  const body = await readBody<Partial<Styles>>(event)

  return event.context.prisma.resume.update({
    where: {
      id,
      userId
    },
    data: {
      styles: {
        upsert: {
          create: {
            fontFamily: body.fontFamily,
            color: body.color,
            padding: body.padding
          },
          update: {
            fontFamily: body.fontFamily,
            color: body.color,
            padding: body.padding
          }
        }
      }
    }
  })
})
