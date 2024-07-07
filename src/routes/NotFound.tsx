import { Layout } from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <main class={"flex flex-col items-center justify-center h-screen"}>
        <h1 class={"text-9xl font-bold text-center"}>
          Erreur <span class={"text-blue-500"}>404</span>
        </h1>
        <p class={"text-center text-lg mt-4 text-gray-600 font-semibold"}>
          La page que vous cherchez n'existe pas.
        </p>
      </main>
    </Layout>
  );
};

export default NotFound;
