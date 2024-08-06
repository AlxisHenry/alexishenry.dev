import { motion } from "framer-motion";

import { useData } from "@/hooks";

import { Title } from "@/components/sections";

export const WorkTogether = () => {
  const { workingTogether } = useData();

  return (
    <section>
      <Title content={workingTogether.title} />
      <p
        className={"mt-8"}
        dangerouslySetInnerHTML={{ __html: workingTogether.description }}
      />
      <div className={"grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2"}>
        {workingTogether.steps.map((step, index) => (
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
      className={
        "p-8 border border-gray-300 rounded-lg transition-colors duration-300 ease-in-out relative hover:border-blue-500"
      }
    >
      <div>
        <div className={"flex gap-4 items-end"}>
          <h1 className={"text-3xl sm:text-5xl text-blue-500 font-bold"}>
            {i + 1}.
          </h1>
          <h3 className={"text-xl sm:text-3xl text-blue-500 font-bold"}>
            {title}
          </h3>
        </div>
        <p className={"mt-4 text-gray-500 dark:text-gray-200"}>{description}</p>
      </div>
    </motion.div>
  );
};
