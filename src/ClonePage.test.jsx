import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import StarlightLandingPage from "./ClonePage.jsx";

describe("StarlightLandingPage", () => {
  afterEach(cleanup);

  it("renders the business message and primary contact paths", () => {
    render(<StarlightLandingPage />);

    expect(screen.getByRole("heading", { name: /electrical projects/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Electrical Project Consulting")).toBeInTheDocument();
    screen.getAllByRole("link", { name: "Call (949) 938-2821" }).forEach((link) => expect(link).toHaveAttribute("href", "tel:+19499382821"));
    screen.getAllByRole("link", { name: "info@startlightconsulting.com" }).forEach((link) => expect(link).toHaveAttribute("href", "mailto:info@startlightconsulting.com"));
  });

  it("opens and closes the mobile navigation", () => {
    render(<StarlightLandingPage />);
    const toggle = screen.getByRole("button", { name: "Toggle navigation" });

    expect(toggle).toHaveClass("min-h-11", "min-w-11");
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(within(screen.getByRole("navigation", { name: "Mobile navigation" })).getByRole("link", { name: "Contact" }));
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
