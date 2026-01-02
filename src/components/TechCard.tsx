import type { Tecnologia } from "../interfaces/tecnologia";

interface Props {
  tech: Tecnologia;
}

const levelColors = {
  Basico: "bg-muted",
  Intermedio: "bg-primary/30",
  Avanzado: "bg-primary",
};

export const TechCard = ({ tech }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-lightGray p-6 transition-all duration-300 hover:border-primary/50 card-glow">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="rounded-xl bg-darkGray p-4 transition-transform duration-300 group-hover:scale-110">
          <img src={tech.icon} className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${levelColors[tech.level]} ${
            tech.level === "Avanzado" ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {tech.level}
        </span>
      </div>
    </div>
  );
};
