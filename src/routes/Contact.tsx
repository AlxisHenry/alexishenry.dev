import { Layout } from "../components/Layout";
import { Contact as ContactSection } from "../components/sections/Contact";
import { FrequentlyAskedQuestions } from "../components/sections/FrequentlyAskedQuestions";

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
