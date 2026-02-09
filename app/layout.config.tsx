import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Relay Agent",
    url: "/docs",
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "API Reference",
      url: "/docs/api-reference/createAgent",
      active: "nested-url",
    },
    {
      text: "GitHub",
      url: "https://github.com/relay-agent",
      external: true,
    },
  ],
};
