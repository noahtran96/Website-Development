import { assets } from "@/assets/assets";

export const SearchBar = () => {
  return (
    <form className="flex h-12 w-full max-w-xl items-center rounded border border-gray-500/20 bg-white md:h-14">
      <img
        src={assets.search_icon}
        alt="Search icon"
        className="w-10 px-3 md:w-auto"
      />
      <input
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
