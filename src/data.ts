import { Experience, ExperienceType } from "./types";

export const description: string =
  "Welcome, weary traveler, to my humble website. My name is Markus Talka, and I work as a software developer and in many other roles in the software industry. I have managed to amass a fair amount of free-time activities, many of which revolve around my lifelong computer hobby. I reside in Helsinki, Finland. Feel free to be in touch, you can find my contact links below.";

export const xpData: Experience[] = [
  {
    id: 0,
    title: "Municipality of Lieto",
    time: "03/2012 - 06/2012",
    content: "Intern",
    type: ExperienceType.Work
  },
  {
    id: 1,
    title: "ICT-Portti",
    time: "08/2013 - 11/2013",
    content: "Intern",
    type: ExperienceType.Work
  },
  {
    id: 2,
    title: "Wärtsilä Oyj",
    time: "05/2014 - 03/2019",
    content: "Solution Expert PDM/PLM",
    type: ExperienceType.Work
  },
  {
    id: 3,
    title: "Ecraft Etima Oy",
    time: "04/2019 - ",
    content: "Software Developer",
    type: ExperienceType.Work
  },
  {
    id: 4,
    title: "Lieto Upper Secondary",
    time: "08/2005 - 12/2008",
    content: "Intern",
    type: ExperienceType.School
  },
  {
    id: 5,
    title: "Rangsit University Bangkok",
    time: "08/2012 - 12/2012",
    content: "Intern",
    type: ExperienceType.School
  },
  {
    id: 6,
    title: "Turku University of Applied Sciences",
    time: "08/2010 - 06/2014",
    content: "Bachelor of Engineering (IT)",
    type: ExperienceType.School
  },
  {
    id: 7,
    title: "University of Turku",
    time: "08/2018 -",
    content: "Software Technology (MSc)",
    type: ExperienceType.School
  },
  {
    id: 8,
    title: "Leading virtual teams",
    time: "06/2016 Wärtsilä",
    type: ExperienceType.Course
  },
  {
    id: 9,
    title: "Teamcenter Datamodel and Application Administration",
    time: "05/2016 Ideal PLM",
    type: ExperienceType.Course
  },
  {
    id: 10,
    title: "ITIL 2011 Foundation",
    time: "04/2015 APMG-International",
    content: "Certificate ID 2000140060",
    type: ExperienceType.Course
  },
  {
    id: 11,
    title: "Hardcore React Training",
    time: "12/2019 Fraktio",
    type: ExperienceType.Course
  },
  {
    id: 12,
    title: "Playing and collecting guitars",
    type: ExperienceType.Hobby
  },
  {
    id: 13,
    title: "Computers & everything related",
    type: ExperienceType.Hobby
  },
  {
    id: 14,
    title: "Muay Thai",
    type: ExperienceType.Hobby
  },
  {
    id: 15,
    title: "Movies, (metal) music and geeking around",
    type: ExperienceType.Hobby
  },
  {
    id: 16,
    title: "Sneakers",
    type: ExperienceType.Hobby
  },
  {
    id: 17,
    title: "Esports, mainly CS:GO",
    type: ExperienceType.Hobby
  },
  {
    id: 18,
    title: "Dungeon Escape - Museum interaction improvement platform",
    time: "12/2013 - 03/2014",
    content:
      "Creating an interactive AR game environment to enhance visitor experience of museums and exhibitions",
    type: ExperienceType.Project
  },
  {
    id: 19,
    title:
      "Bachelor's thesis: Development of augmented reality visualisation solutions",
    time: "03/2014 - 06/2014",
    content:
      "Developing an augmented reality visualisation application for construction industry use, research on the possibilities and the state-of-the-art of augmented reality",
    type: ExperienceType.Project
  }
];
