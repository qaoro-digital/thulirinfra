import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { ReactNode } from "react";

import { CommercialBuildingsSection, ContactDetails, PackagesSection } from "@/components/site";
import { routeTree } from "@/routeTree.gen";

// Shared components navigate with TanStack Router links; render them as plain anchors so
// section markup can be checked without mounting a full router (and its error boundary) in jsdom.
vi.mock("@tanstack/react-router", async () => {
  const actual = await vi.importActual<Record<string, unknown>>("@tanstack/react-router");
  const { createElement } = await import("react");
  return {
    ...actual,
    Link: (props: { to: string; children?: ReactNode }) =>
      createElement("a", { href: props.to }, props.children),
    useRouterState: () => ({ location: { pathname: "/" } }),
  };
});

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
  it("matches the dedicated Products page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/products").at(-1)?.routeId).toBe("/products");
  });
});

describe("Building category pricing", () => {
  it("places commercial buildings below residential packages with its own starting price", () => {
    const { container } = render(
      <>
        <PackagesSection full />
        <CommercialBuildingsSection />
      </>,
    );

    const heading = screen.getByRole("heading", { name: "Commercial Buildings" });
    expect(heading).toBeInTheDocument();
    expect(
      screen.getByText("Professional construction solutions tailored to your business needs."),
    ).toBeInTheDocument();
    expect(screen.getByText("Construction Starting Price")).toBeInTheDocument();
    expect(screen.getByText("₹1,600")).toBeInTheDocument();
    expect(screen.getByText("/ sq. ft.")).toBeInTheDocument();
    expect(
      screen.getByText("Transparent pricing for commercial building construction."),
    ).toBeInTheDocument();

    // Residential package cards must come first, commercial second.
    const residential = screen.getByText("Premium");
    expect(
      residential.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    // The commercial rate must not replace the residential rates.
    expect(container.textContent).toContain("₹2,400");
    expect(container.textContent).toContain("₹2,450");
    expect(container.textContent).toContain("₹2,600");
    expect(container.textContent).toContain("Final pricing may vary");
  });
});

describe("Contact details", () => {
  it("links Facebook and Instagram in a new tab and shows the office address under its own heading", () => {
    render(<ContactDetails />);

    const facebook = screen.getByRole("link", { name: /Facebook/i });
    const instagram = screen.getByRole("link", { name: /Instagram/i });
    expect(facebook).toHaveAttribute(
      "href",
      "https://www.facebook.com/profile.php?id=61594950760244",
    );
    expect(instagram).toHaveAttribute("href", "https://www.instagram.com/thulir__infra555/");
    for (const link of [facebook, instagram]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
    }

    expect(screen.getByText("Our Office")).toBeInTheDocument();
    expect(screen.getByText(/Balaji Nagar 3rd Street/)).toBeInTheDocument();
  });
});
