import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../stories/shadcn/**/*.mdx",
    "../stories/shadcn/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  async viteFinal(viteConfig) {
    viteConfig.plugins = [...(viteConfig.plugins ?? []), tailwindcss()];
    viteConfig.resolve = viteConfig.resolve ?? {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      "@": path.join(projectRoot, ".."),
    };
    return viteConfig;
  },
};
export default config;