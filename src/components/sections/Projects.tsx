import { useData } from "../../hooks";

import { Title } from "./Title";

interface ProjectsProps {
}

export const Projects = (props: ProjectsProps) => {
  const { projects } = useData();

  return (
    <section id={"projects"}>
      <Title content={projects.title} />
      {projects.items.length < 1 ? (
        <p class={"mt-6 text-gray-500 text-lg"}>{projects.empty}</p>
      ) : (
        <p></p>
      )}
    </section>
  );
};