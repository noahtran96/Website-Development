import type { FC } from "react";
import { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

export const Hero: FC = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* pointer glow motion */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* 1st static glow */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      {/* 2nd static glow */}
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* hero content */}
      {/* IDE screen */}
      <div className="relative order-2 w-full">
        {/* IDE outer box */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
          {/* IDE inner box */}
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
            {/* IDE header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white">
              {/* 3 dots + title container */}
              <div className="flex items-center  space-x-2">
                {/* 3 dots container */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  {/* 3 dots */}
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <span>CodeFlow AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
