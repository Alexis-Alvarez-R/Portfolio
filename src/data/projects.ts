import type { Project } from "../interfaces/project";

import pokedex from "../assets/img/pokedex.png";
import heroApp from "../assets/img/hero-app.png";
import rumboApp from "../assets/img/LogoRumboNica.svg";
import shopApp from "../assets/img/teslo-shop.png";

export const projects: Project[] = [
  {
    title: "Pokedex with PokeApi",
    description:
      "Pokedex profesional construida con el stack moderno de React. Implementa React Query para una gestión de estado impecable y Tailwind CSS para un estilo elegante.",
    image: pokedex,
    technologies: ["React", "TypeScript", "React Query", "Tailwind CSS"],
    liveUrl: "https://alexis-alvarez-r.github.io/Pokedex-App/",
    githubUrl: "https://github.com/Alexis-Alvarez-R/Pokedex-App",
  },
  {
    title: "Super Hero App",
    description:
      "Plataforma Fullstack para la exploración de superhéroes, conectando un backend robusto en NestJS con una interfaz moderna en React. El frontend destaca por el uso de Shadcn UI.",
    image: heroApp,
    technologies: ["React", "TypeScript", "Shadcn", "tailwind CSS", "React Query", "Node.js", "Nest.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Alexis-Alvarez-R/hero-app",
  },
  {
    title: "Rumbo Nica (Hackathon)",
    description:
      "Plataforma digital que inspira a descubrir la cultura y naturaleza de Nicaragua. A través de dinámicas, motivamos a visitar destinos únicos, resaltando la riqueza y belleza del país.",
    image: rumboApp,
    technologies: ["React", "TypeScript", "TailwindCSS", "Node Js", "Express.JS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Alexis-Alvarez-R/App-Hackathon",
  },
  {
    title: "Teslo Shop",
    description:
      "Simulación de comercio electrónico centrada en la integridad de los datos y la experiencia de usuario, con su propia API REST realizada en Nest.JS y conexion a BD. ",
    image: shopApp,
    technologies: ["React", "TypeScript", "TailwindCSS", "Shadcn", "React Query", "Node Js", "Nest.JS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Alexis-Alvarez-R/App-TesloShop",
  },
];
