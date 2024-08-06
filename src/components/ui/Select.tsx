interface TextAreaProps {
  placeholder: string;
  name: string;
  options: string[];
  onChange?: (e: any) => void;
}

export const Select = (props: TextAreaProps) => {
  const { placeholder, name, options, onChange } = props;

  return (
    <select
      name={name}
      onChange={onChange}
      required
      defaultValue={""}
      className={
        "p-4 rounded-lg bg-transparent border border-gray-300 mt-4 w-full resize-none transition-colors duration-300 ease-in-out"
      }
    >
      <option value={""} disabled className={"dark:bg-gray-800"}>
        {placeholder}
      </option>
      {options.map((option) => (
        <option className={"dark:bg-gray-800"} value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
