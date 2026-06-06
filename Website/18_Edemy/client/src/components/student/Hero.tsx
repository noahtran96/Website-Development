import { assets } from "@/assets/assets";

export const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-7 bg-gradient-to-b from-cyan-100/70 px-7 pt-20 text-center md:px-0 md:pt-36">
      <h1 className="text-title-sm md:text-title-lg relative mx-auto max-w-3xl font-bold text-gray-800">
        Empower your future with the courses designed to{" "}
        <span className="text-blue-600">fit your choice.</span>
        <img
          src={assets.sketch}
          alt="Sketch"
          className="absolute right-0 -bottom-7 hidden md:block"
        />
      </h1>
      <p className="mx-auto hidden max-w-2xl text-gray-500 md:block">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <p className="mx-auto max-w-sm text-gray-500 md:hidden">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
    </div>
  );
};
