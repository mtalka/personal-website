import { Experience, ExperienceType } from "./types";

export const description: string =
  "Welcome, weary traveler, to my humble website. My name is Markus Talka, and I work as a software developer and in many other roles in the software industry. I have managed to amass a fair amount of free-time activities, many of which revolve around my lifelong computer hobby. I reside in Helsinki, Finland. Feel free to be in touch, you can find my contact links below.";

export const xpData: Experience[] = [
  {
    id: 0,
    title: "Municipality of Lieto",
    time: "03/2012 - 06/2012",
    content: "Intern",
    additionalContent: "Internship in the data administration of the municipal office of Lieto in Southwestern Finland.\nMy duties in this position included:\n-IT end-user support\n-Software installations",
    type: ExperienceType.Work
  },
  {
    id: 1,
    title: "ICT-Portti",
    time: "08/2013 - 11/2013",
    content: "Intern",
    additionalContent: `Internship in the ICT-Portti project cluster in Turku.
My duties included:
-Web design (HTML5, jQuery)
-Graphic design`,
    type: ExperienceType.Work
  },
  {
    id: 2,
    title: "Wärtsilä Oyj",
    time: "05/2014 - 03/2019",
    content: "Solution Expert PDM/PLM",
    additionalContent: `PDM/PLM related duties at Wärtsilä Information Management.

I work in the Engineering Services team in Wärtsilä's Information Management. Our team provides Wärtsilä engineers with services such as PDM, CAD, reporting tools and product configurators. In my position I am working mainly in project delivery management to enhance the core platforms.

I utilize my certified knowledge of IT Service Management to work with vendors and internal partners around the world to deliver quality software solutions, that enable better use of data, more efficient way of working and better integration between platforms. I also work in close cooperation with offshore teams to ensure on my part the operational integrity of the core platforms for which our team provides services.

My duties as a Solution Expert PDM/PLM include:
-Working as project track lead in various software solution delivery projects
-Utilizing agile methods in project delivery
-Stakeholder communication
-Creating solution proposals for enhancement requests
-Managing ICT vendors and external partners
-Integration and System testing

Tools that I am working with include but are not limited to:
-Teamcenter (Suite)
-SAP ERP
-NX CAD
-ServiceNow Scrum tool
-OnTime Project management suite`,
    type: ExperienceType.Work
  },
  {
    id: 3,
    title: "Ecraft Etima Oy",
    time: "04/2019 - ",
    content: "Software Developer",
    additionalContent: `Working as a software developer in a development team.

Duties include but are not limited to
- Programming progressive web applications in all stack layers, emphasis on front-end
- Participating in project scope definition
- Actively participating in customer interaction
- Utilizing agile methods in project / development work execution
- Etc.
`,
    type: ExperienceType.Work
  },
  {
    id: 4,
    title: "Lieto Upper Secondary",
    time: "08/2005 - 12/2008",
    content: "Intern",
    additionalContent: "Matriculation exam",
    type: ExperienceType.School
  },
  {
    id: 5,
    title: "Rangsit University Bangkok",
    time: "08/2012 - 12/2012",
    content: "Intern",
    additionalContent: "Attending and contributing to the exchange program at Rangsit University International College in Bangkok, Thailand.",
    type: ExperienceType.School
  },
  {
    id: 6,
    title: "Turku University of Applied Sciences",
    time: "08/2010 - 06/2014",
    content: "Bachelor of Engineering (IT)",
    additionalContent: `240 ECTS credits, engineering studies in the field of Information Technology.
Field of specialization in Multimedia technology.

Courses taken include but are not limited to:
-Usability and user interface design
-IT product development
-Software development (Basics of programming (Java), Logical structures, Database basics, Algorithms)
-Augmented reality applications
-CISCO CCNA 1 & 2, Network Fundamentals, Routing Protocols and Concepts
-Linux web servers
-Relational databases
-Open source software
-Human-Computer Interaction`,
    type: ExperienceType.School
  },
  {
    id: 7,
    title: "University of Turku",
    time: "08/2018 -",
    content: "Software Technology (MSc)",
    additionalContent: `Software Technology, DI / MSc (Tech)

Courses consist of:
-Software Design and Architecture
-Advanced Programming Techniques
-Practical Software Quality Management, Testing and Estimation
-Software Development and Software Security

-Privacy and Security for Software Systems
-Lean Platform Business Design
among others.`,
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
