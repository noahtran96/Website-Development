import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "./Navbar";

// mock data
jest.mock("../../constants", () => ({
  NAV_ITEMS: [
    { text: "Home", href: "#home" },
    { text: "Pricing", href: "#pricing" },
  ],
}));

describe("Navbar", () => {
  it("renders logo text", () => {
    render(<Navbar scrolled={false} />);
    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Flow")).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    render(<Navbar scrolled={false} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });

  it("toggles mobile menu when button is clicked", () => {
    render(<Navbar scrolled={false} />);

    // original state: button = Open menu
    const button = screen.getByRole("button", { name: /open menu/i });

    // click => open menu
    fireEvent.click(button);

    // after click => close menu
    expect(
      screen.getByRole("button", { name: /close menu/i }),
    ).toBeInTheDocument();

    // click => close menu
    fireEvent.click(screen.getByRole("button", { name: /close menu/i }));

    // return to open menu
    expect(
      screen.getByRole("button", { name: /open menu/i }),
    ).toBeInTheDocument();
  });

  it("closes mobile menu when clicking a nav item", () => {
    render(<Navbar scrolled={false} />);

    // open menu
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));

    // click item
    const mobileItem = screen.getAllByText("Home")[1];
    fireEvent.click(mobileItem);

    // return to open menu
    expect(
      screen.getByRole("button", { name: /open menu/i }),
    ).toBeInTheDocument();
  });

  it("applies scrolled styles when scrolled is true", () => {
    render(<Navbar scrolled={true} />);

    const nav = screen.getByRole("navigation");

    expect(nav).toHaveClass(/border-b/);
    expect(nav).toHaveClass(/bg-slate-950\/80/);
  });
});
