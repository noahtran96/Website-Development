import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IDEScreen } from "./IDEScreen";
import { CODE_EXAMPLES, FLOATING_CARDS } from "../../constants";

// Mocking SyntaxHighlighter because it's heavy and can cause issues in JSDOM
jest.mock("react-syntax-highlighter", () => ({
  Light: ({ children }: { children: React.ReactNode }) => (
    <pre data-testid="code-block">{children}</pre>
  ),
}));
