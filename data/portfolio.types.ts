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
    headline: string;
    heroCopy: string;
    aboutTopics: AboutTopic[];
};

export type ProjectCategory =
    | "ML Infrastructure"
    | "Distributed Systems"
    | "Systems"
    | "Agentic Product"
    | "Applied ML"
    | "C++ / Markets"
    | "Data Engineering"
    | "Automation"
    | "Product / Leadership"
    | "Machine Learning"
    | "Performance Computing"
    | "AI Tooling"
    | "Systems Fundamentals"
    | "Web Product";

export type Project = {
    title: string;
    category: ProjectCategory;
    summary: string;
    importance?: string;
    highlights: string[];
    tech: string[];
    repo: string;
    demo?: string;
    featured: boolean;
    image?: string;
    imageAlt?: string;
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

export type SkillGroup = {
    title: string;
    items: string[];
};
