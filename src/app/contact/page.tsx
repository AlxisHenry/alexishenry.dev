"use client";

import { Layout } from "@/components";
import { Contact, FrequentlyAskedQuestions } from "@/components/sections";

export default function Projects() {
  return (
    <Layout isView>
      <Contact />
      <FrequentlyAskedQuestions />
    </Layout>
  );
}
