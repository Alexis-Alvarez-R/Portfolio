import { TabContent } from "./TabContent";
import { technologies } from "../data/tecnologias";
import { certifications } from "../data/certificaciones";
import { projects } from "../data/projects";
import { TechCard } from "./TechCard";
import { CertificationCard } from "./CertificationCard";
import { ProjectCard } from "./ProjectCard";
import { useSearchParams } from "react-router";

const VALID_TABS = ["technologies", "certifications", "projects"] as const;
type TabType = (typeof VALID_TABS)[number];

export const TabSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawTab = searchParams.get("tab");

  const activeTab: TabType = VALID_TABS.includes(rawTab as TabType) ? (rawTab as TabType) : "technologies";

  const changeTab = (tab: TabType) => {
    setSearchParams({ tab });
  };

  const tabs: { id: TabType; label: string }[] = [
    { id: "technologies", label: "Tecnologías" },
    { id: "certifications", label: "Certificaciones" },
    { id: "projects", label: "Proyectos" },
  ];
  return (
    <>
      {/* Tabs Section */}
      <section className="px-4 py-12 md:py-20" id="tab-section">
        <div className="container mx-auto max-w-6xl">
          {/* Tab Navigation */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-lg border border-border bg-card p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => changeTab(tab.id)}
                  className={`relative rounded-md px-6 py-3 text-sm font-medium transition-all duration-300 md:px-8 ${
                    activeTab === tab.id
                      ? "bg-lightGreen text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && <span className="absolute inset-0 rounded-md bg-primary/20 blur-md" />}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <TabContent isActive={activeTab === "technologies"}>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {technologies.map((tech, index) => (
                <div key={tech.name} className={`animate-slide-up  stagger-${(index % 6) + 1}`}>
                  <TechCard tech={tech} />
                </div>
              ))}
            </div>
          </TabContent>

          <TabContent isActive={activeTab === "certifications"}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {certifications.map((cert, index) => (
                <div key={cert.title} className={`animate-slide-up  stagger-${(index % 4) + 1}`}>
                  <CertificationCard certificacion={cert} />
                </div>
              ))}
            </div>
          </TabContent>

          <TabContent isActive={activeTab === "projects"}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={project.title} className={`animate-slide-up stagger-${(index % 3) + 1}`}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabContent>
        </div>
      </section>
    </>
  );
};
