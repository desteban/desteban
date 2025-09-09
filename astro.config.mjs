import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";

const changefreq = {
  always: "always",
  hourly: "hourly",
  daily: "daily",
  weekly: "weekly",
  monthly: "monthly",
  yearly: "yearly",
  never: "never",
};

// https://astro.build/config
export default defineConfig({
  site: "https://desteban.tech",
  integrations: [
    preact(),
    tailwind(),
    mdx(),
    sitemap({
      serialize(item) {
        item.lastmod = new Date();
        item.changefreq = changefreq.monthly;
        item.priority = 1;

        return item;
      },
    }),
  ],
});

// https://docs.astro.build/es/guides/integrations-guide/sitemap/
