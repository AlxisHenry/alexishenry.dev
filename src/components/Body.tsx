import { useState } from "preact/hooks";
import { ChevronDown, GitHub, Linkedin, ArrowRight } from "react-feather";
import * as Feather from "react-feather";

export const Body = () => {
  const currentPage = window.location.pathname;

  return (
    <div class={"max-w-screen-xl mx-auto mt-64"}>
      {currentPage === "/" && (
        <>
          <Main />
          <Services />
          <Projects />
          <WorkTogether />
          <Contact />
          <FrequentlyAskedQuestions />
        </>
      )}
      {currentPage === "/contact" && (
        <div class={"-mt-24"}>
          <Contact />
          <FrequentlyAskedQuestions />
        </div>
      )}
      {currentPage === "/projects" && (
        <div class={"-mt-24"}>
          <Projects grid />
          <Contact />
          <FrequentlyAskedQuestions />
        </div>
      )}
    </div>
  );
};

const Main = () => {
  return (
    <main class={"text-2xl flex gap-14 mx-auto flex-col leading-9"}>
      <div class={"flex align-center gap-8 justify-between"}>
        <div>
          <h1 class={"name"}>Alexis HENRY</h1>
          <p class={"mt-4"}>
            Un développeur web & mobile{" "}
            <span class={"text-blue-500"}>passionné</span>.
          </p>
          <div class={"flex gap-4 mt-6"}>
            <a
              href={"https://github.com/AlxisHenry"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              class={
                "text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out"
              }
            >
              <GitHub size={38} />
            </a>
            <a
              href={"https://www.linkedin.com/in/alexishenry03/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              class={
                "text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out"
              }
            >
              <Linkedin size={38} />
            </a>
          </div>
        </div>
        <div class={"relative hidden md:block"}>
          <img
            src={
              "https://avatars.githubusercontent.com/u/91117127?s=400&u=d56546995d2f5c3f5f5775d1a223a9676ef2766f&v=4"
            }
            alt={"Random image"}
            class={
              "rounded-full size-80 min-w-80 absolute right-0 -top-16 border-4 border-blue-500"
            }
          />
        </div>
      </div>
    </main>
  );
};

const steps = [
  {
    title: "Définition du besoin",
    description:
      "Nous échangeons sur votre projet, vos besoins et vos attentes. Je vous propose des solutions adaptées à votre projet.",
  },
  {
    title: "Développement",
    description:
      "Je développe votre projet en respectant les bonnes pratiques de développement. Je vous tiens informé de l'avancée du projet.",
  },
  {
    title: "Livraison",
    description:
      "Je vous livre votre projet. Je vous accompagne dans la prise en main de votre projet et je vous forme si nécessaire.",
  },
  {
    title: "Suivi & maintenance",
    description:
      "Je reste disponible pour vous accompagner dans l'évolution de votre projet. Je vous propose des mises à jour si nécessaire.",
  },
];

const WorkTogether = () => {
  return (
    <section>
      <SectionTitle>
        On travaille <span class={"text-blue-500"}>ensemble</span> ?
      </SectionTitle>
      <p class={"mt-8"}>
        Vous avez un projet de développement web ou mobile ? Vous avez besoin
        d'un développeur pour vous accompagner dans la réalisation de votre
        projet ? Je suis là pour vous aider !
      </p>
      <div class={"grid grid-cols-2 gap-4 mt-8"}>
        {steps.map((step, index) => (
          <Step {...step} key={index} i={index} />
        ))}
      </div>
    </section>
  );
};

interface StepProps {
  title: string;
  description: string;
  i: number;
}

const Step = (props: StepProps) => {
  const { title, description, i } = props;

  return (
    <div
      class={
        "p-8 border border-gray-300 rounded-lg transition-colors duration-300 ease-in-out relative hover:border-blue-500"
      }
    >
      <div class={"flex gap-4 items-end"}>
        <h1 class={"text-5xl text-blue-500 font-bold"}>{i + 1}.</h1>
        <h3 class={"text-3xl text-blue-500 font-bold"}>{title}</h3>
      </div>
      <p class={"mt-4 text-gray-500"}>{description}</p>
    </div>
  );
};

const services = [
  {
    icon: "Crop",
    title: "Sur mesure",
    description:
      "Vous avez un projet sur mesure ? Je vous accompagne dans la réalisation de votre projet.",
  },
  {
    icon: "Package",
    title: "Site vitrine & blog",
    description:
      "Vous avez besoin d'un site vitrine ou d'un blog ? Je développe des sites web sur mesure avec WordPress.",
  },
  {
    icon: "DollarSign",
    title: "Intégration shopify",
    description:
      "Je maîtrise l'intégration de thèmes Shopify et le développement de fonctionnalités sur mesure.",
  },
  {
    icon: "Database",
    title: "Laravel",
    description:
      "PHP est un langage que je maîtrise parfaitement. Je développe des applications web sur mesure avec Laravel.",
  },
  {
    icon: "Layout",
    title: "React & Next.js",
    description:
      "Pour le développement d'applications dynamiques et réactives, je maîtrise React et Next.js.",
  },
  {
    icon: "Tablet",
    title: "Applications mobiles",
    description:
      "Vous recherchez une personne pour développer une application mobile ? J'ai une expérience significative avec React Native.",
  },
];

const Services = () => {
  return (
    <section>
      <SectionTitle>
        Mes <span class={"text-blue-500"}>services</span>
      </SectionTitle>
      <div>
        <div class={"grid grid-cols-3 gap-4 mt-8"}>
          {services.map((service) => (
            <Service {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const Service = (props: ServiceProps) => {
  const { title, description, icon } = props;

  // @ts-ignore
  const Icon = Feather[icon];

  return (
    <div
      class={
        "p-8 border border-gray-300 rounded-lg transition-colors duration-300 ease-in-out hover:border-blue-500"
      }
    >
      <div class={"flex gap-3 items-start"}>
        {<Icon size={32} color={"#2563EB"} />}
        <h3 class={"text-xl font-semibold"}>{title}</h3>
      </div>
      <p class={"mt-4 text-gray-500"}>{description}</p>
    </div>
  );
};

const SectionTitle = (props: { children: React.ReactNode }) => {
  return <h2 class={"text-5xl font-semibold"}>{props.children}</h2>;
};

const Contact = () => {
  return (
    <section class={"mb-14"} id={"contact"}>
      <SectionTitle>
        <span class={"text-blue-500"}>Contactez</span>-moi
      </SectionTitle>
      <p class={"mt-8"}>
        Vous avez une idée ? Un projet ? Découvrons ensemble comment je peux
        vous aider ! <br /> Merci de donner un maximum de détail sur le projet
        afin que je puisse évaluer correctement la charge de travail que
        représente votre projet. Cela permettra aussi d'avoir un premier
        chiffrage au plus prêt du devis final.
      </p>
      <form class={"mt-8"}>
        <div class={"grid grid-cols-2 gap-4"}>
          <Input placeholder={"Nom & Prénom"} />
          <Input placeholder={"Email"} />
        </div>
        <TextArea placeholder={"Description du projet"} />
        <div class={"flex justify-start mt-2"}>
          <Button>Soumettre ma demande</Button>
        </div>
      </form>
    </section>
  );
};

const questions = [
  {
    title: "Quels sont mes disponibilités ?",
    description:
      "Je suis actuellement <h>disponible</h> pour de nouvelles missions.",
  },
  {
    title: "Quels sont mes tarifs ?",
    description:
      "La tarification dépend du projet et surtout du temps qui sera nécessaire pour le mener à bien. À titre indicatif mon tarif journalier moyen se situe aux alentour de <h>500€/jour</h>.",
  },
  {
    title: "Est-ce que je me déplace ?",
    description:
      "Etant basé à <h>Strasbourg</h> <img src='https://camo.githubusercontent.com/91569e9a7327b49d7d2d017932b67fddc645967030c6342b64020a6bf7dd11a4/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3139372f3139373536302e706e67' class='size-4 mr-1 inline-block' alt='France' /> je peux me déplacer dans les alentours pour des missions en présentiel. Mais je suis plus à l'aise pour travailler à distance.",
  },
  {
    title: "Quelles sont mes garanties ?",
    description:
      "Je m'engage à vous fournir un travail de <h>qualité</h>, dans les délais impartis. Je m'engage également à respecter la confidentialité de vos données. En fonction du projet je m'engage à vous fournir un support après livraison du projet ainsi que des mises à jour si nécessaire.",
  },
  {
    title: "Quels sont mes domaines d'expertises ?",
    description:
      "Je suis spécialisé dans le développement web et mobile. Je peux réaliser des sites web sur mesure, des applications web et mobiles, des API, des application...",
  },
];

const FrequentlyAskedQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section>
      <SectionTitle>
        Questions <span class={"text-blue-500"}>fréquentes</span>
      </SectionTitle>
      <div class={"mt-8 grid gap-2"}>
        {questions.map((question, index) => (
          <Question
            title={question.title}
            description={question.description}
            open={currentQuestion === index}
            onClick={() => {
              setCurrentQuestion(index === currentQuestion ? -1 : index);
            }}
          />
        ))}
      </div>
    </section>
  );
};

interface QuestionProps {
  title: string;
  description: string;
  open?: boolean;
  onClick?: () => void;
}

const Question = (props: QuestionProps) => {
  const { title, description, open, onClick } = props;

  const formatDescription = (description: string) => {
    return description
      .replace(/<h>/g, "<span class='font-semibold text-blue-500'>")
      .replace(/<\/h>/g, "</span>");
  };

  return (
    <div
      class={
        "border transition-colors duration-300 ease-in-out hover:border-blue-500 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer " +
        (open ? "border-blue-500" : "border-gray-300")
      }
    >
      <div
        class={
          "flex justify-between items-center cursor-pointer py-6 px-4 rounded-lg" +
          (open ? "border-b border-gray-300" : "")
        }
        onClick={onClick}
      >
        <h3 class={"text-md font-semibold"}>{title}</h3>
        <span
          class={
            "transition-transform duration-300 ease-in-out transform " +
            (open ? "rotate-180" : "")
          }
        >
          <ChevronDown size={36} color={open ? "#2563EB" : "#000"} />
        </span>
      </div>
      <div
        class={"bg-red py-2 px-4 rounded-b-lg hidden" + (open ? "block" : "")}
      >
        <p
          class={"mb-4"}
          dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
        />
      </div>
    </div>
  );
};

const Input = (props: { placeholder: string }) => {
  return (
    <input
      type={"text"}
      required
      placeholder={props.placeholder}
      class={
        "p-4 rounded-lg border bg-transparent border-gray-300 transition-colors duration-300 ease-in-out"
      }
    />
  );
};

const Button = (props: { children: string }) => {
  return (
    <button
      class={
        "border hover:border-blue-500 bg-blue-500 text-white px-8 py-4 rounded-lg flex items-center justify-center transition-colors duration-300 ease-in-out w-full focus:outline-none"
      }
    >
      {props.children}
    </button>
  );
};

const TextArea = (props: { placeholder: string }) => {
  return (
    <textarea
      placeholder={props.placeholder}
      class={
        "p-4 rounded-lg bg-transparent border border-gray-300 mt-4 h-48 w-full resize-none transition-colors duration-300 ease-in-out"
      }
    />
  );
};

const projects = [
  {
    title: "Epigrades",
    description:
      "Développement d'une application web pour la gestion des notes des élèves.",
    date: "Date de réalisation",
    stack: ["Next.js", "TypeScript", "Puppeteer"],
  },
  {
    title: "Syl'services",
    description: "Développement d'une application de gestion de stock.",
    date: "Date de réalisation",
    stack: ["Laravel", "Livewire", "TailwindCSS"],
  },
  {
    title: "Portfolio",
    description: "Développement de mon portfolio personnel.",
    date: "Date de réalisation",
    stack: ["Preact", "TailwindCSS"],
  },
  {
    title: "E-commerce",
    description: "Développement d'une boutique en ligne.",
    date: "Date de réalisation",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Blog",
    description: "Développement d'un blog avec WordPress.",
    date: "Date de réalisation",
    stack: ["WordPress", "PHP", "MySQL"],
  },
  {
    title: "Application mobile",
    description:
      "Développement d'une application mobile pour la gestion des tâches.",
    date: "Date de réalisation",
    stack: ["React Native", "Expo"],
  },
];

interface ProjectsProps {
  grid?: boolean;
}

const Projects = (props: ProjectsProps) => {
  const { grid = false } = props;

  const [currentProject, setCurrentProject] = useState(0);

  return (
    <section id={"projects"}>
      <SectionTitle>
        Mes <span class={"text-blue-500"}>projets</span>
      </SectionTitle>
      <div
        class={
          "projects mt-8 gap-4"
          + (grid ? " grid grid-cols-3" : " flex overflow-x-auto border-r border-r-2 border-gray-300")
        }
      >
        {projects.map((project, index) => (
          <Project {...project} key={index} active={currentProject === index} />
        ))}
      </div>
      {
        !grid && (
          <div class={"flex justify-end mt-8 gap-2"}>
            {projects.map((_, index) => (
              <div
                onClick={() => { }}
                class={
                  "w-8 h-3 rounded-full transition-colors duration-300 ease-in-out cursor-pointer " +
                  (currentProject === index ? "bg-blue-500" : "bg-gray-300")
                }
              />
            ))}
          </div>
        )
      }
    </section>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  date: string;
  stack: string[];
  active?: boolean;
}

const Project = (props: ProjectProps) => {
  const { title, description, date, stack, active } = props;

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
