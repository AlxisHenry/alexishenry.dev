"use client";

import { createContext, useEffect } from "react";
import { useState } from "react";
import { notFound, usePathname } from "next/navigation";

import { Project } from "@/types";
import { useData } from "@/hooks";

export interface ProjectContextType {
  project: Project;
}

const defaultProject = {
  slug: "",
  thumbnail: "",
  stack: [],
  title: "",
  description: "",
  links: {},
};

export const ProjectContext = createContext<ProjectContextType>({
  project: defaultProject,
});

interface DataProviderProps {
  children: any;
}

export const ProjectProvider = (props: DataProviderProps) => {
  const { children } = props;

  const pathname = usePathname();
  const { projects } = useData();

  const [project, setProject] = useState<Project | null>(defaultProject);

  useEffect(() => {
    if (project !== null && project.slug !== "") return;

    let slug = pathname.replace("/projects/", "");

    if (projects.items.length > 0) {
      const project = projects.items.find((project) => project.slug === slug);

      if (project) {
        setProject(project);
      } else {
        setProject(null);
      }
    }
  }, [pathname, projects, project]);

  if (project !== null && project.slug === "") {
    return <div>Loading...</div>;
  }

  if (project === null) {
    return notFound();
  }

  return (
    <ProjectContext.Provider
      value={{
        project: project || defaultProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
