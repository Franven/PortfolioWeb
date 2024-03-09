import {
  BellPlus,
  BookText,
  Briefcase,
  Brush,
  Code2,
  CodeSquare,
  Github,
  GithubIcon,
  Home,
  Inbox,
  Linkedin,
  LinkedinIcon,
  Mail,
  PanelsTopLeft,
  Phone,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/Franven",
  },
  {
    id: 2,
    logo: <LinkedinIcon size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/franco-davat/",
  },
];

export const dataAboutMe = [
  {
    id: 1,
    name: "Experiencia",
    icon: <Briefcase />,
    description: "+4 años de experiencia",
  },
  {
    id: 2,
    name: "Clientes",
    icon: <UsersRound />,
    description: "+200 clientes satisfechos",
  },
  {
    id: 3,
    name: "Proyectos",
    icon: <Wrench />,
    description: "+50 completados",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Sobre mi",
    link: "/about-me",
  },
  {
    id: 3,
    title: "Tecnologías",
    link: "/tech",
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
  },
];

export const dataSlider = [
  {
    id: 1,
    url: "/slider-1.jpg",
  },
  {
    id: 2,
    url: "/slider-2.jpg",
  },
  {
    id: 3,
    url: "/slider-3.jpg",
  },
  {
    id: 4,
    url: "/slider-4.jpg",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    url: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    urlGithub: "#!",
    url: "#!",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    url: "#!",
  },
  {
    id: 4,
    title: "Navegando Ideas Creativas",
    image: "/image-4.jpg",
    urlGithub: "#!",
    url: "#!",
  },
  {
    id: 5,
    title: "Sitios Web Impactantes",
    image: "/image-5.jpg",
    urlGithub: "#!",
    url: "#!",
  },
  {
    id: 6,
    title: "Proyectos Web Dinámicos",
    image: "/image-6.jpg",
    urlGithub: "#!",
    url: "#!",
  },
];

export const dataExperience = [
  {
    id: 1,
    title: "Frontend Development  💄",
    experience: [
      {
        name: "HTML",
        subtitle: "Experimentado",
      },
      {
        name: "CSS",
        subtitle: "Intermedio",
      },
      {
        name: "JavaScript",
        subtitle: "Experimentado",
      },
      {
        name: "Tailwind CSS",
        subtitle: "Experimentado",
      },
      {
        name: "React",
        subtitle: "Experimentado",
      },
      {
        name: "Bootstrap",
        subtitle: "Basic",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development  🥷",
    experience: [
      {
        name: "Node JS",
        subtitle: "Experimentado",
      },
      {
        name: "PostgreSQL",
        subtitle: "Intermedio",
      },

      {
        name: "MySQL",
        subtitle: "Experimentado",
      },
      {
        name: "PHP",
        subtitle: "Experimentado",
      },
    ],
  },
];



export const dataContact = [
  {
    id: 1,
    title: "Teléfono",
    subtitle: "+54 91150427726",
    link: "tel:+34677666633",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "https://github.com/Franven",
    link: "https://github.com/Franven",
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "davat.franco@gmail.com",
    link: "mailto:test@test.com",
    icon: <Inbox />,
  },
];


