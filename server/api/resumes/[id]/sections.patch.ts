export default defineEventHandler(async (event) => {
  const { userId } = checkUser(event)

  const id = event.context.params!.id

  const body = await readBody<Partial<Section>[]>(event)

  return event.context.prisma.$transaction(
    body.map(section => event.context.prisma.section.update({
      where: {
        id: section.id,
        resume: {
          id,
          userId
        }
      },
      data: {
        column: section.column,
        order: section.order,
        content: section.content,
        title: section.title,
        enabled: section.enabled
      }
    })
    ))
})
