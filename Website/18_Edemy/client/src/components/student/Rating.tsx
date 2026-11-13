import { useEffect, useState } from "react";

export const Rating = ({ initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating || 0);
  const handleRating = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };
  useEffect(() => {
    if (initialRating) {
      setRating(initialRating);
    }
  }, [initialRating]);
  return (
    <div>
      {Array.from({ length: 5 }, (_, index: number) => {
        const starValue = index + 1;
        return (
          <span
            onClick={() => handleRating(starValue)}
            key={index}
            className={`cursor-pointer text-xl transition-colors sm:text-2xl ${starValue <= rating ? "text-yellow-500" : "text-gray-400"}`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};
