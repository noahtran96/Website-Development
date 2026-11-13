import { assets } from "@/assets/assets";

export const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-8 pt-10 pb-24 md:px-0">
      <h1 className="text-xl font-semibold text-gray-800 md:text-4xl">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 sm:text-sm">
        Knowledge has no borders. Break free from traditional classrooms and
        transform your downtime into growth.
      </p>
      <div className="mt-4 flex items-center gap-6 font-medium">
        <button className="rounded-md bg-blue-600 px-10 py-3 text-white">
          Get started
        </button>
        <button className="flex items-center gap-2">
          Learn more <img src={assets.arrow_icon} alt="Arrow icon" />
        </button>
      </div>
    </div>
  );
};
