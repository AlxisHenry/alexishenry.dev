import { Layout } from "../components/Layout";
import { Projects as ProjectsSection } from "../components/sections/Projects.tsx";
import { Contact } from "../components/sections/Contact";
import { FrequentlyAskedQuestions } from "../components/sections/FrequentlyAskedQuestions";

const Projects = () => {
  return (
    <Layout>
      <div class={"-mt-36"}>
        <ProjectsSection grid />
        <Contact />
        <FrequentlyAskedQuestions />
      </div>
    </Layout>
  );
};

export default Projects;
