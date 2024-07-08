import { useData } from "../../hooks/useData";
import { motion } from "framer-motion";

import { Title } from "./Title";

export const WorkTogether = () => {
  const { workingTogetherSteps } = useData();

  return (
    <section>
      <Title>
        On travaille <span class={"text-blue-500"}>ensemble</span> ?
      </Title>
      <p class={"mt-8"}>
        Vous avez un projet de développement web ou mobile ? Vous avez besoin
        d'un développeur pour vous accompagner dans la réalisation de votre
        projet ? Je suis là pour vous aider !
      </p>
      <div class={"grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2"}>
        {workingTogetherSteps.map((step, index) => (
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
    <motion.div
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.2 }}
      // @ts-ignore
      class={
        "p-8 border border-gray-300 rounded-lg transition-colors duration-300 ease-in-out relative hover:border-blue-500"
      }
    >
      <div>
        <div class={"flex gap-4 items-end"}>
          <h1 class={"text-3xl sm:text-5xl text-blue-500 font-bold"}>{i + 1}.</h1>
          <h3 class={"text-xl sm:text-3xl text-blue-500 font-bold"}>{title}</h3>
        </div>
        <p class={"mt-4 text-gray-500 dark:text-gray-200"}>{description}</p>
      </div>
    </motion.div>
  );
};
