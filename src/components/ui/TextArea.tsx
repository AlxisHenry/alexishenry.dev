interface TextAreaProps {
  placeholder: string;
  name: string;
  onChange?: (e: any) => void;
}

export const TextArea = (props: TextAreaProps) => {
  const { placeholder, name, onChange } = props;

  return (
    <textarea
      name={name}
      required
      onChange={onChange}
      placeholder={placeholder}
      className={
        "p-4 rounded-lg bg-transparent border border-gray-300 mt-4 h-48 w-full resize-none transition-colors duration-300 ease-in-out"
      }
    />
  );
};
