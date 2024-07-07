import { Layout } from "../components";
import {
  Main,
  Services,
  Projects,
  WorkTogether,
  Contact,
  FrequentlyAskedQuestions,
} from "../components/sections";

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
