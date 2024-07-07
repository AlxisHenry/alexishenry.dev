interface InputProps {
  placeholder: string;
  type?: string;
  name: string;
}

export const Input = (props: InputProps) => {
  const { placeholder, type = "text", name } = props;

  return (
    <input
      type={type}
      required
      name={name}
      placeholder={placeholder}
      class={
        "p-4 rounded-lg border bg-transparent border-gray-300 transition-colors duration-300 ease-in-out"
      }
    />
  );
};
