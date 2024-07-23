import { createContext } from "preact";
import { useData } from "../hooks/useData.ts";
import { useState } from "preact/hooks";
import { Project } from "../types";

export interface ProjectContextType {
  project: Project;
  setSlug: (slug: string) => void;
}

const defaultProject = {
  slug: "",
  thumbnail: "",
  stack: [],
  title: "",
  description: "",
  links: {}
}

export const ProjectContext = createContext<ProjectContextType>({
  project: defaultProject,
  setSlug: () => { }
});

interface DataProviderProps {
  children: any;
}

export const ProjectProvider = (props: DataProviderProps) => {
  const { children } = props;
  const [project, setProject] = useState<Project>(defaultProject);
  const { projects } = useData();

  const setSlug = (slug: string) => {
    const project = projects.items.find(
      (project) => project.slug === slug
    );
    if (project) {
      setProject(project);
    }
  };


  return (
    <ProjectContext.Provider value={{
      project,
      setSlug
    }}>
      {children}
    </ProjectContext.Provider>
  );
};