import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.someslc.com',
  base: "/",
  integrations: [tailwind(), react(), image()],
  output: "static",
  adapter: vercel()
});