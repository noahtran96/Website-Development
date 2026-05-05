import { useState, useEffect } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { IDEScreen } from "./IDEScreen";

// interface Position {
//   x: number;
//   y: number;
// }

export const Hero = () => {
  // const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<string>("App.jsx");
  // useEffect(() => {
  //   function handleMouseMove(e: MouseEvent) {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   }
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      {/* pointer glow motion */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* 1st static glow */}
      <div className="absolute top-20 left-4 h-48 w-48 animate-pulse rounded-full bg-blue-500/10 blur-3xl sm:left-10 sm:h-72 sm:w-72" />

      {/* 2nd static glow */}
      <div className="absolute right-4 bottom-20 h-64 w-64 animate-pulse rounded-full bg-cyan-500/10 blur-3xl delay-1000 sm:right-10 sm:h-96 sm:w-96" />

      {/* hero content */}
      {/* hero outer box */}
      <div className="relative mx-auto w-full max-w-7xl text-center">
        {/* hero inner box */}
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:text-left">
          {/* hero text */}
          <div>
            {/* hero introduction pill */}
            <div className="animate-in slide-in-from-bottom mb-4 inline-flex items-center space-x-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 duration-700 sm:mb-6 sm:px-4">
              {/* pill icon */}
              <Sparkles className="h-4 w-4 text-blue-400" />
              {/* pill text */}
              <span className="text-xs text-blue-300 sm:text-sm">
                Introducing CodeFlow AI
              </span>
            </div>
            {/* hero tagline */}
            <h1 className="animate-in slide-in-from-bottom mb-4 text-5xl leading-tight font-semibold delay-100 duration-700 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="via-blue mb-1 block bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent sm:mb-2">
                Code Faster
              </span>
              <span className="mb-1 block bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:mb-2">
                Build Better
              </span>
              <span className="via-blue mb-1 block bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent sm:mb-2">
                With CodeFlow AI
              </span>
            </h1>
            {/* hero description */}
            <p className="text-md animate-in slide-in-from-bottom mx-auto mb-6 max-w-2xl leading-relaxed text-gray-400 delay-200 duration-700 sm:mb-8 sm:text-base lg:mx-0 lg:text-lg">
              Accelerate your development workflow with intelligent code
              completion, automated testing, and smart debugging. Ship
              production-ready code 10x faster.
            </p>
            {/* CTA */}
            {/* CTA container */}
            <div className="animate-in slide-in-from-bottom mb-8 flex flex-col items-center justify-center gap-3 delay-300 duration-700 sm:mb-12 sm:flex-row sm:gap-4 lg:justify-start">
              {/* 1st button */}
              <button className="group flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-b from-blue-600 to-blue-400 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-102 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
                <span>Start Coding Free</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </button>
              {/* 2nd button */}
              <button className="group flex w-full items-center justify-center space-x-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
                <div className="rounded-full bg-white/10 p-2 transition-colors duration-300 group-hover:bg-white/20">
                  <Play className="h-4 w-4 fill-white sm:h-5 sm:w-5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          {/* IDE screen */}
          <div className="relative order-2 w-full">
            <IDEScreen activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>
      </div>
    </section>
  );
};
