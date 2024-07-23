import { Layout } from "../components/Layout";
import { Contact as ContactSection } from "../components/sections/Contact";
import { FrequentlyAskedQuestions } from "../components/sections/FrequentlyAskedQuestions";

const Contact = () => {
  return (
    <Layout isView>
      <ContactSection />
      <FrequentlyAskedQuestions />
    </Layout>
  );
};

export default Contact;
