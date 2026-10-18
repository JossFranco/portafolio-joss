import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import robotsTxt from "astro-robots-txt"
import vercel from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio real donde se publique el portafolio
  site: "https://jossfranco.github.io",
  output: "static",
  adapter: vercel(),
  integrations: [tailwind(), sitemap(), robotsTxt()],
})
