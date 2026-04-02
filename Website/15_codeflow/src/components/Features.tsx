import type { FC } from "react";
import { FEATURES } from "../constants";
import type { Feature } from "../constants";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
SyntaxHighlighter.registerLanguage("javascript", js);

export const Features: FC = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* features headline */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        {/* IDE interface with text */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {/* IDE interface with text container */}
          {FEATURES.map((feature: Feature, key: number) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-grow items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? " lg:flex-row-reverse" : ""}`}
            >
              {/* IDE interface */}
              {/* IDE interface wrapper */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  {/* IDE interface outer box */}
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1              group-hover:border-blue-600/50 transition-all duration-300">
                    {/* IDE interface inner box */}
                    <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      {/* IDE interface header */}
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                        {/* 3 dots container */}
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          {/* 3 dots */}
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                        </div>
                        {/* IDE interface header text */}
                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                          {feature.title}
                        </span>
                      </div>
                      {/* IDE interface code content */}
                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            borderRadius: "0px",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            height: "100%",
                            border: "1px solid #3c3c3c",
                          }}
                          wrapLines={true}
                        >
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* features text */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
