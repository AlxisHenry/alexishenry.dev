import { useState } from "preact/hooks";
import { Title } from "./index";
import { ArrowRight } from "react-feather";
import { useData } from "../../hooks";

interface ProjectsProps {
  grid?: boolean;
}

export const Projects = (props: ProjectsProps) => {
  const { grid = false } = props;

  const { projects } = useData();

  const [currentProject, setCurrentProject] = useState(0);

  return (
    <section id={"projects"}>
      <Title>
        Mes <span class={"text-blue-500"}>projets</span>
      </Title>
      <div
        class={
          "projects mt-8 gap-4" +
          (grid
            ? " grid grid-cols-3"
            : " flex overflow-x-auto border-r border-r-2 border-gray-300")
        }
      >
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
      {!grid && (
        <div class={"flex justify-end mt-8 gap-2"}>
          {projects.map((_, index) => (
            <Indicator index={index} currentProject={currentProject} />
          ))}
        </div>
      )}
    </section>
  );
};

interface IndicatorProps {
  index: number;
  currentProject: number;
}

const Indicator = (props: IndicatorProps) => {
  const { index, currentProject } = props;
  return (
    <div
      onClick={() => {}}
      class={
        "w-8 h-3 rounded-full transition-colors duration-300 ease-in-out cursor-pointer " +
        (currentProject === index ? "bg-blue-500" : "bg-gray-300")
      }
    />
  );
};

interface ProjectProps {
  title: string;
  description: string;
  stack: string[];
}

const Project = (props: ProjectProps) => {
  const { title, description, stack } = props;

  return (
    <div
      class={
        "border border-gray-300 rounded-lg min-w-72 max-w-72 min-h-[500px] hover:border-blue-500 transition-all duration-300 ease-in-out cursor-pointer"
      }
    >
      <img
        src={"https://via.placeholder.com/200"}
        alt={"Random image"}
        class={"rounded-t-lg w-full h-48 max-h-48"}
      />
      <div class={"p-4 flex flex-col justify-between"}>
        <div class={"flex gap-2 mb-4"}>
          {stack.map((tech) => (
            <span class={"rounded-lg text-[16px] bg-blue-100 px-2 py-1"}>
              {tech}
            </span>
          ))}
        </div>
        <div class={"flex mt-2 justify-between items-center"}>
          <h3 class={"text-2xl font-semibold"}>{title}</h3>
        </div>
        <p class={"mt-4 text-sm"}>{description}</p>
        <div class={"mt-4"}>
          <button
            class={
              "bg-blue-500 text-white px-4 py-2 rounded-md mt-4 font-semibold flex items-center gap-2 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            }
          >
            En savoir plus
            <div class={"button__arrow"}>
              <ArrowRight size={24} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
