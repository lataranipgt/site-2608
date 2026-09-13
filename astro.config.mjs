// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// GitHub Pages deployment base path; set by the CI workflow via BASE env var.
// Locally this is undefined, so the site serves from root by default.
const base = process.env.BASE || "/";

// https://astro.build/config
export default defineConfig({
  base,
  integrations: [sitemap()],
  server: {
    host: "0.0.0.0",
    port: 6003,
  },
  site: "https://latathakur.com",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "global" as *;',
          additionalData(content, filename) {
            if (filename.endsWith("global-utils.scss")) {
              return content;
            }
            return `@use "global-utils" as *;\n${content}`;
          },
          loadPaths: ["./src"],
        },
      },
    },
  },
});
