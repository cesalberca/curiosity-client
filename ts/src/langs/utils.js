import { i18n } from './i18n'
import { http } from '@/http'
const loadedLanguages = ['es']
function setLanguage(lang) {
  i18n.locale = lang
  http.interceptors.request.use(config => {
    config.headers.common['Accept-Language'] = lang
    return config
  })
  const html = document.querySelector('html')
  if (html != null) {
    html.setAttribute('lang', lang)
  }
}
export async function loadLanguage(lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      const locale = await import(`./locales/${lang}.json`)
      i18n.setLocaleMessage(lang, locale)
      loadedLanguages.push(lang)
    }
    setLanguage(lang)
  }
}
