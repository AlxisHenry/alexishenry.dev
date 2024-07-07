import { Layout } from "../components";
import {
  Contact as ContactSection,
  FrequentlyAskedQuestions,
} from "../components/sections";

const Contact = () => {
  return (
    <Layout>
      <div class={"-mt-24"}>
        <ContactSection />
        <FrequentlyAskedQuestions />
      </div>
    </Layout>
  );
};

export default Contact;