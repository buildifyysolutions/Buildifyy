import {
  // Overview
  mobile,
  backend,
  creator,
  web,

  resume,

  // Work experience
  milestone,
  // Technologies
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  nextjs,
  git,
  threejs,
  python,
  mysql,
  postgresql,
  powerplatform,
  mongodb,
  csharp,
  dotnet,
  dotnetcore,
  redis,
  php,
  golang,

  // Projects
  shirtcreator,
  androidweatherapp,
  sushi,
  carhub,
  remindme,
  jcpro,
  jotion,
  digitalmarketplace,
  devSphereHome,

  // Person Icons
  person_m,
  person_f

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    link: "/resume",
    download: resume,
  },
];

const about = 
  "We are a skilled software developers with experience in TypeScript, .NET, Power Platform, Python and expertise in frameworks like React, Next.Js Node.Js, Blazor. We're quick learners and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Power Platform",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps & Architecture",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Software Engineer 2",
    // company_name: "Lek d. d.",
    icon: milestone,
    iconBg: "#383E56",
    date: "8 Years of Experience",
    points: [
      "Effectively managed the integration of NDCs (New Distribution Capabilities) using .NET, .NET Core, SOAP APIs, and REST APIs, enhancing system performance and expanding service capabilities.",
      "Worked on migration project from SQL Server to PostgreSQL, overseeing the smooth transfer of tables, stored procedures, and data. Implemented linked servers to ensure seamless database communication.",
      "Implemented Auth0 based SSO authentication, enhancing security and user access control for the application. Led the design and implementation of new workflows for Schedule Change, making the platform more adaptable to evolving industry needs.",
      "Automated database data loads using Azure Data Factory pipelines, including file delimiting for seamless column separation.",
      "Developed a model-driven Order Management and Budgeting application on Power Platform. Implemented and optimized Dual Write integration, refactoring existing processes for improved efficiency."
    ],
  },
  {
    title: "Software Engineer",
    // company_name: "Zelinka d.o.o.",
    icon: milestone,
    iconBg: "#383E56",
    date: "4 Years of Experience",
    points: [
      "Engineered and refined back-end services for adtech systems, leveraging PHP, Python, and Node.js to improve system eﬀiciency and handle thousands of daily requests. Enhanced user experience by developing interactive web pages & data-driven interfaces using AJAX & jQuery.",
      "Designed and implemented scalable RESTful APIs, resulting in a 30% reduction in data exchange latency. Developed MySQL stored procedures,enabling support for high-volume transactions and reducing query execution time by 50%.",
      "Enhanced system performance by implementing Redis-based caching, leading to a 60% decrease in database load and faster data retrieval.",
      "Optimized back-end processes and query logic to boost responsiveness and handle high-traﬀic operations effectively.",
      "Contributed to a 60% increase in data processing speed & collaborated with cross-functional teams to refine ad delivery workflow, resulting in a 70% increase in ad revenue.",
    ],
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "MySQL",
    icon: mysql
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Power Platform",
    icon: powerplatform
  },
  {
    name: "C#",
    icon: csharp
  },
  {
    name: ".NET Core",
    icon: dotnetcore
  },
  {
    name: "PHP",
    icon: php
  },
  {
    name: "Golang",
    icon: golang
  }
];

const projectAbout = 'Following projects showcases our skills and experience through real-world examples of our work. Each project is briefly described with links to code repositories and live demos in it. It reflects our ability to solve complex problems, work with different technologies, and manage projects effectively.';

const projects = [
  {
    name: "Dev Sphere",
    description:
      "🖼️ A space where developers ask, answer, and grow together.",
    tags: [
      {
        name: "Next.JS",
        color: "white-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "teal-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: devSphereHome,
    website_link: "https://dev-sphere-seven.vercel.app/",
    source_code_link: "https://github.com/ankushkhatri/dev-sphere",
  },
  {
    name: "Jotion",
    description:
      "📒Elevate your note-taking with real-time database synchronization, light and dark modes, infinite document hierarchies, and more.",
    tags: [
      {
        name: "Convex",
        color: "red-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "teal-text-gradient",
      },
      {
        name: "Next.JS",
        color: "white-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: jotion,
    website_link: "https://jc-jotion.vercel.app/",
    source_code_link: "https://github.com/jurecapuder/jotion",
  },
  {
    name: "Remind Me",
    description:
      "📝 A modern and responsive full stack web reminder app built with Next.js, TypeScript, and Tailwind CSS.",
    tags: [
      {
        name: "Next.JS",
        color: "white-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "teal-text-gradient",
      },
    ],
    image: remindme,
    website_link: "https://jc-remindme.vercel.app/",
    source_code_link: "https://github.com/jurecapuder/remindme",
  },
];
 
const testimonials = [
  {
    testimonial:
      "What impressed us most wasn’t just their technical skill — it was how deeply they listened. It felt like they were part of our internal team.",
    name: "Aryan Upadhyay",
    image: person_m,
  },
  {
    testimonial:
      "Our internal devs were stuck on an integration for weeks. Buildifyy solved it in a day and even documented everything clearly. Lifesavers.",
    name: "Sean Walters",
    image: person_m,
  },
  {
    testimonial:
      "I’ve hired agencies before, but none matched the clarity and reliability Buildifyy to the table. Felt like a partnership, not a service.",
    name: "Gill Farell",
    image: person_f,
  },
];

export { about, services, experiences, technologies, projectAbout, projects, testimonials };