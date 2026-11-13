import { memo } from "react";
import { ChevronDown } from "lucide-react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CODE_EXAMPLES, FLOATING_CARDS } from "../../constants";

// Register language outside to prevent re-registration every render
SyntaxHighlighter.registerLanguage("javascript", js);

interface IDEScreenProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const IDEScreen = memo(({ activeTab, onTabChange }: IDEScreenProps) => {
  const card = FLOATING_CARDS[activeTab];
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:rounded-2xl sm:p-4">
      {/* Container */}
      <div className="h-[280px] overflow-hidden rounded-lg border border-white/5 bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm sm:h-[350px] lg:h-[450px]">
        {/* Header section */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-3">
          {/* 3 dots + title container */}
          <div className="flex items-center space-x-2">
            {/* 3 dots container */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* 3 dots */}
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <span className="ml-2 text-xs font-medium text-gray-300 sm:text-sm">
              CodeFlow AI
            </span>
          </div>
          {/* IDE header icon */}
          <ChevronDown className="h-3 w-3 text-gray-400 sm:h-4 sm:w-4" />
        </div>
        {/* IDE tab button + content container */}
        <div className="relative h-full p-3 sm:p-4">
          {/* IDE tab button container */}
          <div className="mb-3 flex space-x-1 overflow-x-auto sm:mb-4 sm:space-x-2">
            {Object.keys(CODE_EXAMPLES).map(
              (example: string, index: number) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={activeTab === example}
                  onClick={() => onTabChange(example)}
                  className={`rounded-t-lg border px-3 py-2 text-xs backdrop-blur-sm sm:text-sm ${activeTab === example ? "border-blue-400/20 bg-blue-500/30 text-white" : "hover:bg-white-10 border-white/10 bg-white/5 text-gray-300"} whitespace-nowrap transition-all duration-200`}
                >
                  {example}
                </button>
              ),
            )}
          </div>
          {/* IDE code content */}
          <div className="relative flex-grow overflow-hidden">
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
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
                textAlign: "left",
              }}
            >
              {CODE_EXAMPLES[activeTab]}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      {/* floating cards container */}
      <div
        data-testid="floating-card"
        className={`absolute right-4 bottom-4 hidden w-72 translate-x-8 translate-y-8 transform lg:block ${card.bgColor} rounded-lg border border-white/20 p-4 shadow-2xl backdrop-blur-xl`}
      >
        {/* floating cards title container */}
        <div className="mb-2 flex items-center space-x-2">
          {/* floating cards icon */}
          <div
            className={`h-6 w-6 ${card.iconColor} flex items-center justify-center text-sm font-bold`}
          >
            {card.icon}
          </div>
          {/* floating cards title */}
          <span className={`text-sm font-medium ${card.textColor}`}>
            {card.title}
          </span>
        </div>
        {/* floating cards content */}
        <div className={`text-left text-sm ${card.contentColor}`}>
          {card.content}
        </div>
      </div>
    </div>
  );
});

IDEScreen.displayName = "IDEScreen";
