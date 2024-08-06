"use client";

import { Layout } from "@/components";

const Custom404 = () => {
  return (
    <Layout>
      <main className={"flex flex-col items-center justify-center h-screen"}>
        <h1 className={"text-5xl sm:text-9xl font-bold text-center"}>
          Erreur <span className={"text-blue-500"}>404</span>
        </h1>
        <p className={"text-center text-lg mt-4 text-gray-600 font-semibold"}>
          La page que vous cherchez n&rsquo;existe pas.
        </p>
      </main>
    </Layout>
  );
};

export default Custom404;
