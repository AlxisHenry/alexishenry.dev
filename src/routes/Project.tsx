import { Layout } from "../components/Layout";
import { Title } from "../components/sections/Title.tsx";
// import { useData } from "../hooks/useData.ts";

interface ProjectProps {
  slug: string;
}

const Project = (props: ProjectProps) => {
  const { slug } = props;

  return (
    <Layout isView>
      <div class={"mt-60"}>
        <Title content={slug} />
      </div>
    </Layout>
  )
};

export default Project;