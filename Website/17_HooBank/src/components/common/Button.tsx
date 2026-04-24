export const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient text-primary rounded-full px-6 py-4 text-[18px] font-medium outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};
