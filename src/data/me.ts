const skills = [
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
const profiles = [
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
];
const experiences = [
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
];

/* Projects */

const projects = [
  {
    title: "Bridge AI",
    description: `Bridge AI is a comprehensive platform designed to assist estate agents in managing leads 24/7. It qualifies leads, books appointments, and cross-sells properties through integrated channels such as WhatsApp, email, and the agent’s website.`,
    skills: [
      "React.JS",
      "TypeScript",
      "React Native",
      "Expo",
      "Web Socket",
      "Recoil",
      "React Query",
      "MUI",
    ],
    cover: "/images/projects/bridge.png",
    link: "https://www.bridge.rent/",
  },
  {
    title: "Copax",
    description: `Copax is an advanced fleet management system that empowers users to track vehicles in real-time and monitor their activities comprehensively. With Copax, users can seamlessly add drivers, create geofences, and access detailed vehicle performance records.`,
    skills: [
      "React.JS",
      "TypeScript",
      "Socket.IO",
      "Zustand",
      "React Query",
      "MUI",
    ],
    cover: "/images/projects/copax.png",
    link: "https://copax-fms.com/",
  },
  {
    title: "Subul",
    description:
      "Subul is a social enterprise based in The Hague, Netherlands, dedicated to bridging the gap between the global tech industry's talent needs and the untapped potential of refugees and disadvantaged communities.",
    cover: "/images/projects/subul.png",
    skills: ["Next.JS", "SSG", "TailwindCss"],
    link: "https://subul.org/",
  },
  {
    title: "Rahal",
    description: `An online platform designed for travelers exploring Syria, offering personalized travel experiences through hotel bookings, local tour guide connections, and cultural immersion tools — all in one place`,
    skills: ["Next.JS", "SSR", "SSG", "TailwindCss", "Shadcn", "Stripe"],

    cover: "/images/projects/rahal.png",
    link: "https://rahalapp.com/",
  },
  {
    title: "Mercato",
    description:
      "Mercato is a B2B pharmaceutical marketplace for the Iraqi market, enabling buyers and suppliers to trade securely and efficiently",
    skills: ["Next.JS", "SSR", "React Query", "MUI", "Index DB"],

    cover: "/images/projects/mercato.png",
    link: "https://mercato-pos.com",
  },
  {
    title: "BeeBuy",
    description: `BeeBuy is a modern B2B e-commerce platform designed to simplify global trade by connecting buyers and suppliers across various industries. The platform aims to streamline the procurement process, allowing users to effortlessly discover, compare, and complete transactions in just a few steps`,
    skills: ["Next.JS", "TailwindCss", "Shadcn"],
    cover: "/images/projects/beebuy.png",
    link: "https://beebuy.online/",
  },
  {
    title: "Portfolio",
    skills: ["Next.JS", "TailwindCss", "Shadcn"],
    description: "My Portfolio",
    cover: "/images/projects/portfolio.png",
    link: "https://esam-portfolio.vercel.app/",
  },
  {
    title: "Click-In",
    skills: ["React.JS"],

    description: "Landing Page",
    cover: "/images/projects/click-in.png",
    link: "http://www.clickin.r-link.io/",
  },
];

/*  */
export const me = {
  summary: `Front-End Developer with 4+ years of experience using React and
            Next.js to build scalable web applications. Skilled in TypeScript,
            Tailwind CSS, modern state management tools like Zustand and Recoil,
            and API integration using REST and GraphQL. Focused on creating
            clean, maintainable code and delivering seamless user experiences`,
  experiences,
  skills,
  profiles,
  projects,
};
