import type { Tecnologia } from "../interfaces/tecnologia";

import iconReact from "../assets/iconos/tecnologias-icon/react_dark.svg";
import iconTS from "../assets/iconos/tecnologias-icon/typescript.svg";
import iconNode from "../assets/iconos/tecnologias-icon/nodejs.svg";
import iconPG from "../assets/iconos/tecnologias-icon/postgresql.svg";
import iconTW from "../assets/iconos/tecnologias-icon/tailwindcss.svg";
import iconNest from "../assets/iconos/tecnologias-icon/nestjs.svg";
import iconJS from "../assets/iconos/tecnologias-icon/javascript.svg";
import iconHTML from "../assets/iconos/tecnologias-icon/html5.svg";
import iconCSS from "../assets/iconos/tecnologias-icon/css.svg";
import iconVS from "../assets/iconos/tecnologias-icon/shadcn-ui_dark.svg";
import iconPostman from "../assets/iconos/tecnologias-icon/typeorm.svg";
import iconVite from "../assets/iconos/tecnologias-icon/vitejs.svg";

export const technologies: Tecnologia[] = [
  { name: "HTML", icon: iconHTML, level: "Avanzado" },
  { name: "CSS", icon: iconCSS, level: "Avanzado" },
  { name: "Tailwind CSS", icon: iconTW, level: "Avanzado" },
  { name: "JavaScript", icon: iconJS, level: "Avanzado" },
  { name: "React", icon: iconReact, level: "Intermedio" },
  { name: "TypeScript", icon: iconTS, level: "Avanzado" },
  { name: "Node.js", icon: iconNode, level: "Intermedio" },
  { name: "Nest.js", icon: iconNest, level: "Intermedio" },
  { name: "PostgreSQL", icon: iconPG, level: "Intermedio" },
  { name: "TypeORM", icon: iconPostman, level: "Intermedio" },
  { name: "Shadcn", icon: iconVS, level: "Intermedio" },
  { name: "Vite", icon: iconVite, level: "Intermedio" },
];
