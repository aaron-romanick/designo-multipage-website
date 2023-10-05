import { defaultLocale } from 'astro-i18n-aut'

export function useTranslations(lang: string, dictionary: Record<string, Record<string, string>>) {
  return function t(key: string) {
    return dictionary[lang][key] || dictionary[defaultLocale][key]
  }
}