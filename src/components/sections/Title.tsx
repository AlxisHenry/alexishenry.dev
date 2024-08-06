interface SectionTitleProps {
  content: string;
}

export const Title = (props: SectionTitleProps) => {
  const { content } = props;

  return (
    <h2
      className={"text-5xl font-semibold"}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};
