import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout options used across all layouts.
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Relay Agent",
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
