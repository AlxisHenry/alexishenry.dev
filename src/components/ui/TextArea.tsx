interface TextAreaProps {
  placeholder: string;
}

export const TextArea = (props: TextAreaProps) => {
  const { placeholder } = props;

  return (
    <textarea
      placeholder={placeholder}
      class={
        "p-4 rounded-lg bg-transparent border border-gray-300 mt-4 h-48 w-full resize-none transition-colors duration-300 ease-in-out"
      }
    />
  );
};
