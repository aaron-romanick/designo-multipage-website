import { defineConfig } from 'astro/config'
import { i18n, filterSitemapByDefaultLocale } from 'astro-i18n-aut/integration'
import purgecss from 'astro-purgecss'
import sitemap from '@astrojs/sitemap'
import yaml from '@rollup/plugin-yaml'

const defaultLocale = 'en'
const locales = {
  en: 'en-US', // the `defaultLocale` value must present in `locales` keys
  ja: 'ja-JP',
}

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === 'production' ? 'https://projects.aaronromanick.com' : 'http://localhost:4321',
  trailingSlash: 'never',
  base: process.env.NODE_ENV === 'production' ? '/designo-multipage-website' : undefined,
  build: {
    assets: '_assets',
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
    // https://github.com/codiume/orbit/tree/main/packages/astro-purgecss
    // https://purgecss.com/configuration.html
    purgecss({
      variables: true,
    }),
  ],
  vite: {
    plugins: [yaml()]
  },
});