declare global {
    const get = useResume().get
    type Resume = Awaited<ReturnType<typeof get>>
    type Section = Resume['sections'][0]
    type Header = Resume['header']
}

export { }
