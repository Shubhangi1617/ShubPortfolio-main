export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    title: "Android App Developer",
    company: "Frtpe",
    location: "Remote",
    period: "2023 - Present",
    description: [
      "Designed and developed a warehouse import/export management Android application.",
      "Worked on system workflows for managing warehouse inventory and logistics processes.",
      "Contributed to UI/UX design and application structure to improve usability and efficiency."
    ],
    technologies: [
      "Android Development",
      "System Design",
      "UI/UX Design",
      "App Workflow Design"
    ]
  },
  {
    id: 2,
    title: "Junior Software Developer",
    company: "Modern Informatics",
    location: "Mumbai, India",
    period: "Aug 2022 - Mar 2023",
    description: [
      "Participated in development of an in-house C# based web application.",
      "Worked on backend development tasks and application support.",
      "Collaborated with the team to debug and improve existing features.",
      "Developed a strong understanding of UI/UX and system functionality."
    ],
    technologies: [
      ".NET Core",
      "C#",
      "SQL",
      "JavaScript"
    ]
  },
  {
    id: 3,
    title: "Technical & Operations Intern",
    company: "VC Technosolutions",
    location: "Mumbai, India",
    period: "Jun 2022 - Aug 2022",
    description: [
      "Worked on operational and technical support tasks within project workflows.",
      "Managed data and reports using Excel and internal tools.",
      "Developed strong skills in data organization and technical documentation."
    ],
    technologies: [
      "Microsoft Excel",
      "Data Management",
      "Technical Support"
    ]
  },
  {
    id: 4,
    title: "Freelance UX Designer",
    company: "Freelance Project",
    location: "Remote",
    period: "2022",
    description: [
      "Designed UX flows and interface concepts for a dating application.",
      "Created wireframes and user flow diagrams for improved user experience.",
      "Worked on visual design ideas to enhance product usability."
    ],
    technologies: [
      "UI/UX Design",
      "Wireframing",
      "User Flow Design"
    ]
  }
];