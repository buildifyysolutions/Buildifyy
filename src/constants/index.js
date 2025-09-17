import {
  // Overview
  mobile,
  backend,
  creator,
  web,

  resume,

  // Work experience
  lek,
  zelinka,

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
  "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

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
    title: "IT Support",
    company_name: "Lek d. d.",
    icon: lek,
    iconBg: "#383E56",
    date: "June 2021 - June 2021",
    points: [
      "Assisting users with inquiries and technical issues, gaining valuable troubleshooting experience.",
      "Efficiently managing and organizing storage resources, enhancing organizational abilities.",
      "Creating clear and informative labels for easy identification and accessibility.",
      "Preparing equipment and tools for tasks, emphasizing the importance of readiness.",
    ],
  },
  {
    title: "Service and installation of computer equipment",
    company_name: "Zelinka d.o.o.",
    icon: zelinka,
    iconBg: "#E6DEDD",
    date: "March 2023 - May 2023",
    points: [
      "Laptop and computer service",
      "Replacing the motherboard, battery, RAM module, fans, keyboard",
      "Installation of computer equipment, upgrading of components",
      "RAM, SSD/HDD, GPU, expansion slots",
      "Diagnostics and testing of computer equipment",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
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
      "I thought it was impossible to make a website as beautiful as our product, but Jure proved me wrong.",
    name: "David Wallace",
    designation: "CFO",
    company: "Dunder Mifflin inc.",
    image: "https://media.licdn.com/dms/image/C4E03AQHU6R-7mLLOuA/profile-displayphoto-shrink_800_800/0/1590010254084?e=2147483647&v=beta&t=GzUb1fUjfrPvoT35JVfoSCG8qnIEq-zvkj4DyRj2Sz8",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jure does.",
    name: "Jo Bennett",
    designation: "COO",
    company: "Sabre inc.",
    image: "https://i.ibb.co/5ktt59x/jobennet.png",
  },
  {
    testimonial:
      "After Jure optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bob Vance",
    designation: "CEO",
    company: "Vance Refrigeration",
    image: "https://media.licdn.com/dms/image/C4D03AQHFsWT5mNMh8A/profile-displayphoto-shrink_800_800/0/1587495120000?e=2147483647&v=beta&t=4kEGJH_D6aZOfD5Vg8VgI42CMo5hXVA7UGHOG4uWVGY",
    // image was: https://randomuser.me/api/portraits/men/9.jpg
  },
];

export { about, services, experiences, technologies, projectAbout, projects, testimonials };