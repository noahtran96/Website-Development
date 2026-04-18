import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

// mock data
jest.mock("react-syntax-highlighter", () => {
  const MockComponent = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );

  MockComponent.registerLanguage = jest.fn();

  return {
    Light: MockComponent,
  };
});

jest.mock(
  "react-syntax-highlighter/dist/esm/languages/hljs/javascript",
  () => ({}),
);

jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => ({
  nightOwl: {},
}));

jest.mock("../../constants", () => ({
  CODE_EXAMPLES: {
    "App.jsx": "console.log('app')",
    "Test.jsx": "console.log('test')",
  },
}));

jest.mock("../../constants/floatingCards", () => ({
  FLOATING_CARDS: {
    "App.jsx": {
      title: "App Card",
      content: "App content",
      icon: "A",
      bgColor: "",
      iconColor: "",
      textColor: "",
      contentColor: "",
    },
    "Test.jsx": {
      title: "Test Card",
      content: "Test content",
      icon: "T",
      bgColor: "",
      iconColor: "",
      textColor: "",
      contentColor: "",
    },
  },
}));

describe("Hero", () => {
  it("renders hero heading and CTA", () => {
    render(<Hero />);

    expect(screen.getByText("Code Faster")).toBeInTheDocument();
    expect(screen.getByText("Build Better")).toBeInTheDocument();

    expect(screen.getByText("Start Coding Free")).toBeInTheDocument();
    expect(screen.getByText("Watch Demo")).toBeInTheDocument();
  });
});
