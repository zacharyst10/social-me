import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.friendlyuser.github.io',
  base: "/",
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel()
});