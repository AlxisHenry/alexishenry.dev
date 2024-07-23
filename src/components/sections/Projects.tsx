import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, GitHub } from "react-feather";
import { useData, useProject } from "../../hooks";
import { Project } from "../../types/index.ts";

import { Title } from "./Title";
import { useEffect, useRef, useState } from "preact/hooks";
import { useLocation } from "preact-iso";
import { ProjectProvider } from "../../contexts";

export const Projects = () => {
  const { projects } = useData();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;

    const progress = (scrollLeft / maxScrollLeft) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    const currentRef = scrollRef.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToPrevious = () => {
    if (scrollRef.current && currentProjectIndex > 0) {
      const cardWidth = scrollRef.current.clientWidth / 1.26;
      const newIndex = currentProjectIndex - 1;
      setCurrentProjectIndex(newIndex);
      const newScrollLeft = newIndex * cardWidth;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    if (scrollRef.current && currentProjectIndex < projects.items.length - 1) {
      const cardWidth = scrollRef.current.clientWidth / 1.26;
      const newIndex = currentProjectIndex + 1;
      setCurrentProjectIndex(newIndex);
      const newScrollLeft = newIndex * cardWidth;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };


  return (
    <ProjectProvider>
      <section id={"projects"}>
        <div class={"flex justify-between items-center"}>
          <Title content={projects.title} />
          <div class={"hidden sm:flex gap-3 items-center"}>
            <Arrow direction="left" onClick={scrollToPrevious} />
            <Arrow direction="right" onClick={scrollToNext} />
          </div>
        </div>
        {projects.items.length < 1 ? (
          <p class={"mt-6 text-gray-500 text-lg"}>{projects.empty}</p>
        ) : (
          <>
            <div
              ref={scrollRef}
              class={"mt-10 flex overflow-x-auto gap-10 hide-scrollbar"}
            >
              {projects.items.map((project: any, index: number) => (
                <ProjectCard project={project} key={index} />
              ))}
            </div>
            <ProgressIndicator progress={scrollProgress} />
          </>
        )}
      </section>
    </ProjectProvider>
  );
};

interface ArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

const Arrow = (props: ArrowProps) => {
  const { direction, onClick } = props;

  return (
    <div class={"p-2 border border-gray-400 text-gray-400 rounded-full w-fit cursor-pointer transition-colors duration-300 ease-in-out hover:border-blue-500 hover:text-blue-500"} onClick={onClick}>
      {direction === "left" ? (
        <ArrowLeft size={28} />
      ) : (
        <ArrowRight size={28} />
      )}
    </div>
  );
}

interface ProgressIndicatorProps {
  progress: number;
}

const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { progress } = props;

  return (
    <div class={"mt-10"}>
      <div class={"w-full rounded-full h-[3px] bg-gray-400"}>
        <div class={"rounded-full h-[3px] bg-blue-600"} style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  const { setSlug } = useProject();
  const { projects } = useData();

  const location = useLocation();

  return (
    <div class={"w-full min-w-[960px] min-h-[480px] flex flex-col gap-4 text-justify cursor-pointer"}>
      <div class={"relative"}>
        <img src={project.thumbnail} alt={project.title} class={"w-full min-w-[960px] object-cover rounded-2xl filter brightness-[30%]"} />
        <div class={"absolute left-4 top-4 p-4 bottom-4 right-4 flex flex-col items-center justify-center text-white"}>
          <div class={"text-white filter brightness-[100%]"}>
            <h1 class={"text-4xl font-bold"}>
              {project.title}
            </h1>
          </div>
          <div class={"flex gap-4 mt-4"}>
            {project.stack.map((tag, index) => (
              <span key={index} class={"font-semibold text-gray-300"}>
                {tag}
              </span>
            ))}
          </div>
          <div class={"flex gap-4 mt-4"}>
            {project.links.github && (
              <a href={project.links.github} target={"_blank"} rel={"noopener noreferrer"} class={"hover:text-blue-500 transition-colors duration-300 ease-in-out"}>
                <GitHub size={32} />
              </a>
            )}
            {project.links.preview && (
              <a href={project.links.preview} target={"_blank"} rel={"noopener noreferrer"} class={"hover:text-blue-500 transition-colors duration-300 ease-in-out"}>
                <ExternalLink size={32} />
              </a>
            )}
          </div>
          <button class={"absolute bottom-4 left-4 hover:text-blue-500 transition-colors duration-300 ease-in-out gap-2 flex"}
            onClick={() => {
              location.route(`/projects/${project.slug}`);
              setSlug(project.slug);
            }}>
            <span>{projects.viewProject}</span>
            <ArrowUpRight size={24} />
          </button>
        </div>
      </div>
      <h2 class={"px-4 py-1 text-md font-thin"}>
        {project.description}
      </h2>
    </div>
  );
}