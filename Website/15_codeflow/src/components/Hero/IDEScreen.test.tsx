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

describe("IDEScreen Component", () => {
  const mockOnTabChange = jest.fn();
  const tabs = Object.keys(CODE_EXAMPLES);
  const activeTab = tabs[0];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the IDE header and brand name", () => {
    render(<IDEScreen activeTab={activeTab} onTabChange={mockOnTabChange} />);

    expect(screen.getByText(/CodeFlow AI/i)).toBeInTheDocument();
    expect(screen.getByText(activeTab)).toBeInTheDocument();
  });

  it("renders all tabs defined in constants", () => {
    render(<IDEScreen activeTab={activeTab} onTabChange={mockOnTabChange} />);

    tabs.forEach((tab) => {
      expect(screen.getByRole("tab", { name: tab })).toBeInTheDocument();
    });
  });
});
