interface ButtonProps {
  children: any;
  submitting: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { children, submitting, onClick = () => {} } = props;

  return (
    <button
      disabled={submitting}
      onClick={onClick}
      className={
        "border hover:border-blue-500 bg-blue-500 text-white px-8 py-6 rounded-lg flex items-center justify-center transition-colors duration-300 ease-in-out w-full focus:outline-none"
      }
    >
      {children}
    </button>
  );
};
