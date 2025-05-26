const techSkills = [
  {
    category: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "Zustand",
      "Context API",
      "Recoil",
      "React Query",
      "Tailwind CSS",
      "Material UI",
      "Mantine UI",
      "ShadCN",
    ],
  },
  {
    category: "Testing Tools",
    skills: ["Cypress", "Playwright", "Jest"],
  },
  {
    category: "Backend & API",
    skills: ["Express.js", "Strapi", "RESTful API", "MongoDB"],
  },
];

export const me = {
  summary: `Front-End Developer with 4+ years of experience using React and
            Next.js to build scalable web applications. Skilled in TypeScript,
            Tailwind CSS, modern state management tools like Zustand and Recoil,
            and API integration using REST and GraphQL. Focused on creating
            clean, maintainable code and delivering seamless user experiences`,
  experiences: [
    {
      title: "Front-End Developer",
      location: "London, United Kingdom",
      description: `Built a scalable React & TypeScript app with optimized load times using React Query and Recoil.\nDeveloped a real-time WebSocket chat plugin to boost client engagement.\nCollaborated with cross-functional teams to deliver quality projects on time and within budget.`,
      period: "2024 - Present",
    },
    {
      title: "Front-End Developer",
      location: "Dubai, United Arab Emirates",
      description: `Developed and maintained Copax, an advanced fleet management system with real-time vehicle tracking, driver management, and geofence creation.\nBuilt intuitive React, TypeScript, and MUI interfaces ensuring seamless user experience.\nImproved code modularity, reducing onboarding time.\nOptimized real-time data rendering for better responsiveness.`,
      period: "2023 - 2024",
    },
    {
      title: "Front-End Developer",
      location: "Netherlands",
      description: `Leveraged React Query to enhance performance and simplify state management, replacing Redux boilerplate.\nDeveloped backend services integrated with Strapi.\nConducted code reviews to reduce complexity by removing unused code.`,
      period: "2021 - 2022",
    },
  ],
  skills: techSkills,
  profiles: [
    {
      name: "Github",
      href: "https://github.com/ESAM-ALSAWAH",
      Icon: "/icons/github.svg",
    },
    {
      name: "Linkedin",
      href: "https://linkedin.com/in/esamalsawah",
      Icon: "/icons/linkedin.svg",
    },
    {
      name: "Dev",
      href: "https://dev.to/esamalsawah",
      Icon: "/icons/dev.svg",
    },
    {
      name: "Medium",
      href: "https://medium.com/@esam.alsawah2000",
      Icon: "/icons/medium.svg",
    },
  ],
};
