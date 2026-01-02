import type { Navlink } from "@/interfaces/navlink";
import imgPerfil from "../assets/img/perfil.jpeg";
import { Nav } from "./Nav";

const navLinks: Navlink[] = [
  { label: "Tecnologias", tab: "technologies" },
  { label: "Proyectos", tab: "projects" },
  { label: "Certificaciones", tab: "certifications" },
];

export const Header = () => {
  return (
    <header className="w-full bg-gris mb-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-5">
          <img className="h-20 w-20 rounded-full object-contain" src={imgPerfil} alt="img de perfil" />

          <div>
            <p className="text-2xl text-white">Alexis Alvarez</p>
            <p className="text-lightGray">Software Developer</p>
          </div>
        </div>

        <Nav navLinks={navLinks} />
      </div>
    </header>
  );
};
