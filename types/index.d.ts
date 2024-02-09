declare global {
    const get = useResume().get
    type Resume = Awaited<ReturnType<typeof get>>
}

export { }
