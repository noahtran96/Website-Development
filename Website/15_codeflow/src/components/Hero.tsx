import type { FC } from "react";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { CODE_EXAMPLES } from "../constants";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
SyntaxHighlighter.registerLanguage("javascript", js);

interface Position {
  x: number;
  y: number;
}

export const Hero: FC = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<string>("App.jsx");
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
                <span className="text-xs sm:text-sm text-gray-300">
                  CodeFlow AI
                </span>
              </div>
              {/* IDE header icon */}
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </div>
            {/* IDE tab button + content container */}
            <div className="p-3 sm:p-4 relative h-full">
              {/* IDE tab button container */}
              <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                {Object.keys(CODE_EXAMPLES).map(
                  (example: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(example)}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === example ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white-10"} transition-all duration-200 whitespace-nowrap`}
                    >
                      {example}
                    </button>
                  ),
                )}
              </div>
              {/* IDE code content */}
              <div className="relative overflow-hidden flex-grow">
                <SyntaxHighlighter
                  language="javascript"
                  style={nightOwl}
                  customStyle={{
                    margin: 0,
                    borderRadius: "0px",
                    fontSize: "11px",
                    lineHeight: "1.4",
                    height: "100%",
                    border: "1px solid #3c3c3c",
                  }}
                >
                  {CODE_EXAMPLES[activeTab]}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          {/* floating cards */}
        </div>
      </div>
    </section>
  );
};
