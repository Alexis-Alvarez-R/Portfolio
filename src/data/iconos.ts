import iconGithub from "../assets/iconos/icons/github.svg";
import iconLinkedin from "../assets/iconos/icons/linkedin.svg";
import iconIG from "../assets/iconos/icons/instagram.svg";

interface arrayIconos {
  id: number;
  url: string;
  link: string;
}

export const iconos: arrayIconos[] = [
  {
    id: 1,
    url: iconGithub,
    link: "https://github.com/Alexis-Alvarez-R",
  },
  {
    id: 2,
    url: iconLinkedin,
    link: "https://www.linkedin.com/in/alexis-alvarez-28863a396/",
  },
  {
    id: 3,
    url: iconIG,
    link: "https://www.instagram.com/alexis_alvare5?igsh=MTJ0YzJteDAyemI2ZQ==",
  },
];
