interface SectionTitleProps {
  content: string;
}

export const Title = (props: SectionTitleProps) => {
  const { content } = props;

  return <h2 class={"text-5xl font-semibold"} dangerouslySetInnerHTML={{
    __html: content
  }} />
};
