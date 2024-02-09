declare global {
    const get = useResume().get
    type Resume = Awaited<ReturnType<typeof get>>
    
    interface ResumeExperience {
        id: string;
        type: 'professional' | 'volunteering' | 'education';
        position: string;
        workplace: string;
        location: string;
        startDate: Date;
        endDate?: Date;
        isOngoing: boolean;
        description: string;
    }

    interface ResumeData {
        name: string;
        title: string;
        location: string;
        phone: number;
        email: string;
        photo?: string;
        summary: string;
        experiences: ResumeExperience[];
    }
}

export { }
