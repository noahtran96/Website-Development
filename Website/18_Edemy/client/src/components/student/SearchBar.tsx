import { assets } from "@/assets/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };
  return (
    <form
      onSubmit={onSearchHandler}
      className="flex h-12 w-full max-w-xl items-center rounded border border-gray-500/20 bg-white md:h-14"
    >
      <img
        src={assets.search_icon}
        alt="Search icon"
        className="w-10 px-3 md:w-auto"
      />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
        className="h-full w-full text-gray-500/80 outline-none"
      />
      <button
        type="submit"
        className="mx-1 rounded bg-blue-600 px-7 py-2 text-white md:px-10 md:py-3"
      >
        Search
      </button>
    </form>
  );
};
