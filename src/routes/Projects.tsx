import { Layout } from "../components";
import {
  Projects as ProjectsSection,
  Contact,
  FrequentlyAskedQuestions,
} from "../components/sections";

const Projects = () => {
  return (
    <Layout>
      <div class={"-mt-24"}>
        <ProjectsSection grid />
        <Contact />
        <FrequentlyAskedQuestions />
      </div>
    </Layout>
  );
};

export default Projects;