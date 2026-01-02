import { Award, ExternalLink } from "lucide-react";
import type { Certificacion } from "../interfaces/certificacion";

interface Props {
  certificacion: Certificacion;
}

export const CertificationCard = ({ certificacion }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 card-glow">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <div className="rounded-xl bg-lightGreen p-3">
            <Award className="h-6 w-6 text-lightGray" />
          </div>
          {certificacion.credentialURL && (
            <a
              href={certificacion.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <ExternalLink className="h-4 w-4 text-lightGreen" />
            </a>
          )}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">{certificacion.title}</h3>
        <p className="mb-1 text-sm text-muted-foreground">{certificacion.issuer}</p>
      </div>
    </div>
  );
};
