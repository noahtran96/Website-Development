interface ButtonProps {
  styles?: string;
}

export const Button = ({ styles }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient text-primary rounded-[10px] px-6 py-4 text-[18px] font-medium outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};
