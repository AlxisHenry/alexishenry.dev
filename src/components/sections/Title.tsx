interface SectionTitleProps {
  children: React.ReactNode;
}

export const Title = (props: SectionTitleProps) => {
  const { children } = props;

  return <h2 class={"text-5xl font-semibold"}>{children}</h2>;
};
