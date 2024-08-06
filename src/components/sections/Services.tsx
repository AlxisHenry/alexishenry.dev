import * as Feather from "react-feather";
import { motion } from "framer-motion";

import { useData } from "@/hooks";

import { Title } from "@/components/sections";

export const Services = () => {
  const { services } = useData();

  return (
    <section>
      <Title content={services.title} />
      <p
        className={"mt-8"}
        dangerouslySetInnerHTML={{ __html: services.description }}
      />
      <div>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:grid-cols-3"
          }
        >
          {services.items.map((service) => (
            <Service key={service.title} {...service} />
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
      className={
        "p-8 border border-gray-300 rounded-lg transition-colors duration-300 ease-in-out hover:border-blue-500"
      }
    >
      <div>
        <div className={"flex gap-3 items-start"}>
          {<Icon size={32} color={"#2563EB"} />}
          <h3 className={"text-xl font-semibold"}>{title}</h3>
        </div>
        <p className={"mt-4 text-gray-500 dark:text-gray-200"}>{description}</p>
      </div>
    </motion.div>
  );
};
