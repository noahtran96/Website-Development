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
      className="relative px-10 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* features headline */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-5xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
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
              className={`flex flex-col items-center gap-8 sm:gap-12 lg:flex-row ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
            >
              {/* IDE interface */}
              {/* IDE interface wrapper */}
              <div className="w-full flex-1">
                <div className="group relative">
                  {/* gradient background */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-all duration-500 sm:rounded-2xl" />
                  {/* IDE interface outer box */}
                  <div className="relative overflow-hidden rounded-xl border border-gray-700/50 bg-gray-900/50 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-1 group-hover:border-blue-600/50 sm:rounded-2xl sm:p-6">
                    {/* IDE interface inner box */}
                    <div className="rounded-lg bg-gray-950 p-3 font-mono text-xs sm:p-4 sm:text-sm">
                      {/* IDE interface header */}
                      <div className="mb-3 flex items-center space-x-1 sm:mb-4 sm:space-x-2">
                        {/* 3 dots container */}
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          {/* 3 dots */}
                          <div className="h-2 w-2 rounded-full bg-red-500 sm:h-3 sm:w-3" />
                          <div className="h-2 w-2 rounded-full bg-yellow-500 sm:h-3 sm:w-3" />
                          <div className="h-2 w-2 rounded-full bg-green-500 sm:h-3 sm:w-3" />
                        </div>
                        {/* IDE interface header text */}
                        <span className="ml-2 text-xs text-gray-400 sm:ml-4 sm:text-sm">
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
                            background: "transparent",
                            borderRadius: "0px",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            height: "100%",
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
              {/* text outer box */}
              <div className="w-full flex-1">
                {/* text inner box */}
                <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                  {/* title */}
                  <h3 className="mb-4 text-4xl font-bold text-white sm:mb-6 sm:text-3xl lg:text-4xl">
                    {feature.title}
                  </h3>
                  {/* description */}
                  <p className="text-base text-xl leading-relaxed text-gray-300 sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
