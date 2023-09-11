import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercelStatic from '@astrojs/vercel/static';



// https://astro.build/config
export default defineConfig({
  site: 'https://www.someslc.com',
  base: "/",
  integrations: [tailwind(), react(), ],
  output: "static",
  adapter: vercelStatic()
});