import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "./Navbar";

// Mock data
jest.mock("../../constants", () => ({
  NAV_ITEMS: [
    { text: "Home", href: "#home" },
    { text: "Pricing", href: "#pricing" },
  ],
}));

describe("Navbar Mobile Interactivity", () => {
  // Setup userEvent instance
  const user = userEvent.setup();

  it("renders logo and brand name correctly", () => {
    render(<Navbar scrolled={false} />);
    expect(screen.getByAltText(/codeflow logo/i)).toBeInTheDocument();
    expect(screen.getByText(/code/i)).toBeInTheDocument();
    expect(screen.getByText(/flow/i)).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    render(<Navbar scrolled={false} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });

  it("toggles mobile menu icon and accessibility label when clicked", async () => {
    render(<Navbar scrolled={false} />);

    // 1. Initial state: hamburger menu should be visible
    const toggleButton = screen.getByRole("button", { name: /open menu/i });
    expect(toggleButton).toBeInTheDocument();

    // 2. Click to open: should switch to Close (X) icon
    await user.click(toggleButton);
    const closeButton = screen.getByRole("button", { name: /close menu/i });
    expect(closeButton).toBeInTheDocument();

    // 3. Click again to close: should return to hamburger icon
    await user.click(closeButton);
    expect(
      screen.getByRole("button", { name: /open menu/i }),
    ).toBeInTheDocument();
  });

  it("closes mobile menu automatically when a navigation link is clicked", async () => {
    render(<Navbar scrolled={false} />);

    // 1. Open the mobile menu first
    const toggleButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(toggleButton);

    // 2. Identify mobile links
    const allHomeLinks = screen.getAllByRole("link", { name: /home/i });
    const mobileHomeLink = allHomeLinks[1];

    // 3. Click the mobile link
    await user.click(mobileHomeLink);

    // 4. Verification: The menu should be closed (button label reverts to "Open menu")
    expect(
      screen.getByRole("button", { name: /open menu/i }),
    ).toBeInTheDocument();
  });

  it("applies different background styles based on the scrolled prop", () => {
    // 1. Initial render with scrolled={false}
    const { rerender } = render(<Navbar scrolled={false} />);
    const navElement = screen.getByRole("navigation");

    // Verify transparent background when not scrolled
    expect(navElement).toHaveClass("bg-slate-950/20");
    expect(navElement).not.toHaveClass("bg-slate-950/80");

    // 2. Re-render with scrolled={true}
    rerender(<Navbar scrolled={true} />);

    // Verify solid background and border appear after scrolling
    expect(navElement).toHaveClass("bg-slate-950/80");
    expect(navElement).toHaveClass("border-b");

    // Verify the old class is removed
    expect(navElement).not.toHaveClass("bg-slate-950/20");
  });
});
