import { useData } from "../../hooks/useData";

interface TextAreaProps {
  placeholder: string;
  name: string;
  options: string[];
}

export const Select = (props: TextAreaProps) => {
  const { placeholder, name, options } = props;

  return (
    <select
      name={name}
      required
      class={
        "p-4 rounded-lg bg-transparent border border-gray-300 mt-4 w-full resize-none transition-colors duration-300 ease-in-out"
      }
    >
      <option value={""} selected disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};
