import * as Feather from "react-feather";
import { motion, useAnimate } from "framer-motion";

import { useData } from "../../hooks";

import { Title } from "./Title";
import { useEffect } from "preact/hooks";

export const Services = () => {
  const { services } = useData();

  return (
    <section>
      <Title>
        Mes <span class={"text-blue-500"}>services</span>
      </Title>
      <div>
        <div class={"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:grid-cols-3"}>
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
    <motion.div
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.2 }}
      // @ts-ignore
      class={
        "p-8 border border-gray-300 rounded-lg transition-colors duration-300 ease-in-out hover:border-blue-500"
      }
    >
      <div>
        <div class={"flex gap-3 items-start"}>
          {<Icon size={32} color={"#2563EB"} />}
          <h3 class={"text-xl font-semibold"}>{title}</h3>
        </div>
        <p class={"mt-4 text-gray-500 dark:text-gray-200"}>{description}</p>
      </div>
    </motion.div>
  );
};
