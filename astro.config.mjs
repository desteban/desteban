import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import { SerializePage } from "./src/config/SiteMap/Serialize";

// https://astro.build/config
export default defineConfig({
  site: "https://desteban.tech",
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@iconos": "/public/Icons",
        "@img": "/public/img",
        "@iconosFrame": "/public/frameworks",
        "@globals": "/src/Globals",
        "@constants": "/src/constants",
        "@assets": "/src/assets",
        "@config": "/src/config",
      },
    },
  },
  integrations: [
    preact(),
    tailwind(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-CO",
        },
      },
      priority: 1,
      serialize: SerializePage,
    }),
  ],
});

// https://docs.astro.build/es/guides/integrations-guide/sitemap/
