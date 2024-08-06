import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  GitHub,
} from "react-feather";
import Image from "next/image";
import Link from "next/link";

import { useData } from "@/hooks";
import { Project } from "@/types";

import { Title } from "@/components/sections";

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
    <section id={"projects"}>
      <div className={"flex justify-between items-center"}>
        <Title content={projects.title} />
        <div className={"hidden sm:flex gap-3 items-center"}>
          <Arrow direction="left" onClick={scrollToPrevious} />
          <Arrow direction="right" onClick={scrollToNext} />
        </div>
      </div>
      {projects.items.length < 1 ? (
        <p className={"mt-6 text-gray-500 text-lg"}>{projects.empty}</p>
      ) : (
        <>
          <div
            ref={scrollRef}
            className={"mt-10 flex overflow-x-auto gap-10 hide-scrollbar"}
          >
            {projects.items.map((project: any, index: number) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
          <ProgressIndicator progress={scrollProgress} />
        </>
      )}
    </section>
  );
};

interface ArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

const Arrow = (props: ArrowProps) => {
  const { direction, onClick } = props;

  return (
    <div
      className={
        "p-2 border border-gray-400 text-gray-400 rounded-full w-fit cursor-pointer transition-colors duration-300 ease-in-out hover:border-blue-500 hover:text-blue-500"
      }
      onClick={onClick}
    >
      {direction === "left" ? (
        <ArrowLeft size={28} />
      ) : (
        <ArrowRight size={28} />
      )}
    </div>
  );
};

interface ProgressIndicatorProps {
  progress: number;
}

const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { progress } = props;

  return (
    <div className={"mt-10"}>
      <div className={"w-full rounded-full h-[3px] bg-gray-400"}>
        <div
          className={"rounded-full h-[3px] bg-blue-600"}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  const { projects } = useData();

  return (
    <div
      className={
        "w-full min-w-[960px] min-h-[480px] flex flex-col gap-4 text-justify cursor-pointer"
      }
    >
      <div className={"relative"}>
        <Image
          width={960}
          height={480}
          src={project.thumbnail}
          alt={project.title}
          className={
            "w-full min-w-[960px] object-cover rounded-2xl filter brightness-[30%]"
          }
        />
        <div
          className={
            "absolute left-4 top-4 p-4 bottom-4 right-4 flex flex-col items-center justify-center text-white"
          }
        >
          <div className={"text-white filter brightness-[100%]"}>
            <h1 className={"text-4xl font-bold"}>{project.title}</h1>
          </div>
          <div className={"flex gap-4 mt-4"}>
            {project.stack.map((tag, index) => (
              <span key={index} className={"font-semibold text-gray-300"}>
                {tag}
              </span>
            ))}
          </div>
          <div className={"flex gap-4 mt-4"}>
            {project.links.github && (
              <a
                href={project.links.github}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={
                  "hover:text-blue-500 transition-colors duration-300 ease-in-out"
                }
              >
                <GitHub size={32} />
              </a>
            )}
            {project.links.preview && (
              <a
                href={project.links.preview}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={
                  "hover:text-blue-500 transition-colors duration-300 ease-in-out"
                }
              >
                <ExternalLink size={32} />
              </a>
            )}
          </div>
          <Link
            className={
              "absolute bottom-4 left-4 hover:text-blue-500 transition-colors duration-300 ease-in-out gap-2 flex"
            }
            href={`/projects/${project.slug}`}
          >
            <span>{projects.viewProject}</span>
            <ArrowUpRight size={24} />
          </Link>
        </div>
      </div>
      <h2 className={"px-4 py-1 text-md font-thin"}>{project.description}</h2>
    </div>
  );
};
