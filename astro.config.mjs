import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gakuchoren.github.io",
  base: "/official",
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  build: {
    format: "preserve", // NOTE: 出力ファイルの設定
  },
  integrations: [tailwind()],
});
