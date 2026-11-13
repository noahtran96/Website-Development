export const BlueDots = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, index: number) => (
        <div
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#60a5fa",
            left: `${(index * 7) % 100}%`,
            top: `${(index * 13) % 100}%`,
            animation: `slow-drift ${15 + (index % 20)}s ease-in-out infinite`,
            animationDelay: `${index % 5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
