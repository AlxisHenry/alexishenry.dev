interface InputProps {
  placeholder: string;
  type?: string;
  name: string;
  onChange?: (e: any) => void;
}

export const Input = (props: InputProps) => {
  const { placeholder, type = "text", onChange, name } = props;

  return (
    <input
      onChange={onChange}
      type={type}
      required
      name={name}
      placeholder={placeholder}
      className={
        "p-4 rounded-lg border bg-transparent border-gray-300 transition-colors duration-300 ease-in-out"
      }
    />
  );
};
