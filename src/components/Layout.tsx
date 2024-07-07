import { Footer, Header } from "../components";

interface LayoutProps {
  children: any;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <div class={"max-w-screen-xl mx-auto mt-64"}>{children}</div>
      <Footer />
    </>
  );
};
