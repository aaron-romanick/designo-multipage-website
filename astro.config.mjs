import { defineConfig } from 'astro/config'
import { i18n, filterSitemapByDefaultLocale } from 'astro-i18n-aut/integration'
import sitemap from '@astrojs/sitemap'
import yaml from '@rollup/plugin-yaml'

const defaultLocale = 'en'
const locales = {
  en: 'en-US', // the `defaultLocale` value must present in `locales` keys
  ja: 'ja-JP',
}

const site = import.meta.env.MODE === 'production' ? 'https:://projects.aaronromanick.com/designo' : 'http://localhost:4321'

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
  vite: {
    plugins: [yaml()]
  },
});