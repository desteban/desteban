import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

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
    tailwind(),
    react(),
    sitemap({
      serialize(item) {
        // if (/regex/.test(item.url)) {
        //   item.lastmod = new Date();
        //   item.priority = 1;
        // }

        if (/proyectos\/luks/.test(item.url)) {
          return undefined;
        }

        item.lastmod = new Date();
        item.changefreq = changefreq.monthly;
        item.priority = 1;

        return item;
      },
    }),
  ],
});

// https://docs.astro.build/es/guides/integrations-guide/sitemap/
