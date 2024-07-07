import { Layout } from "../components/Layout";
import { Main } from "../components/sections/Main";
import { Services } from "../components/sections/Services";
import { Projects } from "../components/sections/Projects";
import { WorkTogether } from "../components/sections/WorkTogether";
import { Contact } from "../components/sections/Contact";
import { FrequentlyAskedQuestions } from "../components/sections/FrequentlyAskedQuestions";

const Home = () => {
  return (
    <Layout>
      <Main />
      <Services />
      <Projects />
      <WorkTogether />
      <Contact />
      <FrequentlyAskedQuestions />
    </Layout>
  );
};

export default Home;
