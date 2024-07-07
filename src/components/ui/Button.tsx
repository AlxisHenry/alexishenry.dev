interface ButtonProps {
  children: string;
}

export const Button = (props: ButtonProps) => {
  const { children } = props;

  return (
    <button
      class={
        "border hover:border-blue-500 bg-blue-500 text-white px-8 py-4 rounded-lg flex items-center justify-center transition-colors duration-300 ease-in-out w-full focus:outline-none"
      }
    >
      {children}
    </button>
  );
};
