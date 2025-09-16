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

const projectAbout = 'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.';

const projects = [
  {
    name: "DigitalHippo",
    description:
      "🖼️ A Modern Fullstack E-Commerce Marketplace for Digital Products",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "red-text-gradient",
      },
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
        name: "Payload",
        color: "purple-text-gradient",
      },
      
    ],
    image: digitalmarketplace,
    website_link: "https://jc-digitalmarketplace.up.railway.app/",
    source_code_link: "https://github.com/jurecapuder/digital_marketplace",
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
  {
    name: "JC Pro",
    description:
      "🔃 SEO website about PDF guide searching",
    tags: [
      {
        name: "Tailwind CSS",
        color: "teal-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "red-text-gradient",
      },
      {
        name: "Next.JS",
        color: "white-text-gradient",
      },
    ],
    image: jcpro,
    website_link: "https://jc-jcpro.vercel.app/",
    source_code_link: "https://github.com/jurecapuder/jcpro",
  },
  {
    name: "Shirt Creator",
    description:
      "👕 User-friendly web application that allows users to customize and visualize shirt designs in 3D.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "white-text-gradient",
      },
      {
        name: "Tailwind",
        color: "teal-text-gradient",
      },
    ],
    image: shirtcreator,
    website_link: "https://jc-shirtcreator.vercel.app/",
    source_code_link: "https://github.com/jurecapuder/ShirtCreator",
  },
  {
    name: "Sushi Landing Page",
    description:
      "🍣 A responsive and captivating landing page for a fictional sushi restaurant, built with HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: sushi,
    website_link: "https://jc-sushiman.vercel.app/",
    source_code_link: "https://github.com/jurecapuder/Sushi",
  },
  {
    name: "Car Hub",
    description:
      "🚗 Car Hub is a user-friendly web application that simplifies the process of finding and comparing rental prices for various cars.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.JS",
        color: "white-text-gradient",
      }
    ],
    image: carhub,
    website_link: "https://jc-carhub.vercel.app/",
    source_code_link: "https://github.com/jurecapuder/carshowcase",
  },
  {
    name: "Android Weather App",
    description:
      "Android application to display the weather forecast.",
    tags: [
      {
        name: "Java",
        color: "red-text-gradient",
      },
      {
        name: "XML",
        color: "green-text-gradient",
      },
    ],
    image: androidweatherapp,
    website_link: "https://appetize.io/embed/ml6hhcr36an3udxuqg6nbl72lm",
    source_code_link: "https://github.com/jurecapuder/AndroidWeatherApp",
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