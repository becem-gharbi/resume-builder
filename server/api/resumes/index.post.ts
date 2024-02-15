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
      styles: {
        create: {
          fontFamily: 'Rubik'
        }
      },
      header: {
        create: {
          name: 'John Doe',
          email: 'john@example.com',
          location: 'Washington, USA',
          phone: '+123456',
          title: 'Web developer'
        }
      },
      sections: {
        create: [
          {
            title: 'Summary',
            type: 'summary',
            column: 0,
            order: 0
          },
          {
            title: 'Experience',
            type: 'experience',
            column: 0,
            order: 1
          },
          {
            title: 'Education',
            type: 'education',
            column: 0,
            order: 2
          },
          {
            title: 'Languages',
            type: 'languages',
            column: 1,
            order: 0
          },
          {
            title: 'Skills',
            type: 'skills',
            column: 1,
            order: 1
          },
          {
            title: 'Projects',
            type: 'projects',
            column: 1,
            order: 2
          },
          {
            title: 'Volunteering',
            type: 'volunteering',
            column: 1,
            order: 3
          },
          {
            title: 'Certifications',
            type: 'certifications',
            column: 1,
            order: 4
          },
          {
            title: 'Strengths',
            type: 'strengths',
            column: 1,
            order: 5
          }
        ]
      }
    }
  })
})
