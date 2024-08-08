"use client";

import Image from "next/image";

import { Layout } from "@/components";
import { ComingSoon, Title } from "@/components/sections";
import { useProject } from "@/hooks";

export default function Project() {
  const { project } = useProject();

  return (
    <Layout isView>
      <ComingSoon />
      {/* <section>
        <Image
          width={960}
          height={480}
          src={project.thumbnail}
          alt={project.title}
          className={
            "w-full min-w-[960px] object-cover rounded-2xl filter brightness-[30%]"
          }
        />
        <Title content={project.title} />
      </section> */}
    </Layout>
  );
}
