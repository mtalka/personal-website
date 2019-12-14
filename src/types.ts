export type Experience = {
    id: number;
    title: string;
    time?: string;
    content?: string;
    type: ExperienceType;
}

export enum ExperienceType {
    Work = 0,
    School = 1,
    Course = 2,
    Hobby = 3,
    Project = 4
}