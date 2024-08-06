import { Footer, Header } from "@/components";

interface LayoutProps {
  children: any;
  isView?: boolean;
}

export const Layout = (props: LayoutProps) => {
  const { children, isView = false } = props;

  return (
    <div className={isView ? "mt-10 md:-mt-28" : ""}>
      <Header />
      <div className={"max-w-screen-xl mx-auto"}>{children}</div>
      <Footer />
    </div>
  );
};
