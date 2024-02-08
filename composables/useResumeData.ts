export function useResumeData () {
  return useState<ResumeData>('resume-data', () => {
    return {
      name: 'Becem Gharbi',
      title: 'Full Stack Developer',
      location: 'Sfax, Tunisia',
      phone: 2205,
      email: 'xxx@xx.xx',
      photo: '',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      experiences: [
        {
          id: 'kjh',
          type: 'professional',
          position: 'Open Source Developer',
          workplace: 'GitHub',
          isOngoing: false,
          location: 'Remote',
          startDate: new Date(),
          endDate: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    }
  })
}
