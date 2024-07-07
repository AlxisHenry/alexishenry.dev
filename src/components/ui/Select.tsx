import { useData } from "../../hooks/useData";

interface TextAreaProps {
  placeholder: string;
}

export const Select = (props: TextAreaProps) => {
  const { placeholder } = props;

  const { contactOptions } = useData();

  return (
    <select
      required
      class={
        "p-4 rounded-lg bg-transparent border border-gray-300 mt-4 w-full resize-none transition-colors duration-300 ease-in-out"
      }
    >
      <option value={""} selected disabled>
        {placeholder}
      </option>
      {contactOptions.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};
