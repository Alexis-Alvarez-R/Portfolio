export interface Tecnologia {
  name: string;
  icon: string;
  level: Level;
}

type Level = "Avanzado" | "Intermedio" | "Basico";
