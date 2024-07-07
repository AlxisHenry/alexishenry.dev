interface InputProps {
  placeholder: string;
}

export const Input = (props: InputProps) => {
  const { placeholder } = props;

  return (
    <input
      type={"text"}
      required
      placeholder={placeholder}
      class={
        "p-4 rounded-lg border bg-transparent border-gray-300 transition-colors duration-300 ease-in-out"
      }
    />
  );
};
