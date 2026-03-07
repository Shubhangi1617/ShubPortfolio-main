export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements: string[];
  certificate?: string;
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Engineering (Information Technology)",
    institution: "Pillai HOC College of Engineering & Technology, Maharashtra",
    duration: "2019 – 2022",
    description:
      "Completed a Bachelor's degree in Information Technology with focus on software development, programming fundamentals, and modern web technologies.",
    achievements: [
      "Built strong foundation in programming and software development.",
      "Worked with technologies like C#, JavaScript, SQL and .NET.",
      "Developed understanding of system design and backend development."
    ],
    certificate: "degree_certificate.pdf"
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Pillai HOC Polytechnic, Rasayani",
    duration: "2016 – 2019",
    description:
      "Completed a diploma program in Computer Engineering covering programming, databases, and computer systems.",
    achievements: [
      "Learned fundamentals of programming and database management.",
      "Gained early exposure to software development tools.",
      "Built problem-solving and debugging skills."
    ],
    certificate: "diploma_certificate.pdf"
  }
];