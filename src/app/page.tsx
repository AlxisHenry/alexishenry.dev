"use client";

import { Layout } from "@/components";
import {
  Main,
  Services,
  WorkTogether,
  Contact,
  FrequentlyAskedQuestions,
} from "@/components/sections";

export default function Home() {
  return (
    <Layout>
      <Main />
      <Services />
      <WorkTogether />
      <Contact />
      <FrequentlyAskedQuestions />
    </Layout>
  );
}
