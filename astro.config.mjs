import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.friendlyuser.github.io',
  base: "/",
  integrations: [tailwind(), react(), image()],
  output: "server",
  adapter: vercel()
});