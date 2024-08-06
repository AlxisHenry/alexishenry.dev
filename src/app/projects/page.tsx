"use client";

import { Layout } from "@/components";
import {
  Contact,
  Projects as ProjectsCaroussel,
  FrequentlyAskedQuestions,
} from "@/components/sections";

export default function Projects() {
  return (
    <Layout isView>
      <ProjectsCaroussel />
      <FrequentlyAskedQuestions />
      <Contact />
    </Layout>
  );
}
