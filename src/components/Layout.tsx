import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

interface LayoutProps {
  children: any;
  isView?: boolean;
}

export const Layout = (props: LayoutProps) => {
  const { children, isView = false } = props;

  return (
    <div class={isView ? "mt-10 md:-mt-28" : ""}>
      <Header />
      <div class={"max-w-screen-xl mx-auto"}>{children}</div>
      <Footer />
    </div>
  );
};
