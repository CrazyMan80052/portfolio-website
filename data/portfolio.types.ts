export type AboutTopic = {
    title: string;
    body: string;
};

export type AboutContact = {
    email: string;
    github: string;
    linkedin: string;
};

export type AboutData = {
    name: string;
    showResume: boolean;
    contact: AboutContact;
    pageHeader: string;
    pageDescription: string;
    aboutTopics: AboutTopic[];
};

export type Project = {
    title: string;
    summary: string;
    highlights: string[];
    repo?: string;
    tech: string[];
};

export type Experience = {
    positionTitle: string;
    company: string;
    summary: string;
    highlights: string[];
    tech: string[];
    location: string;
    dates: string;
};