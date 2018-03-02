import { i18n } from './i18n'
import { http } from './../http'

const loadedLanguages = ['es']

function setI18nLanguage(lang) {
  i18n.locale = lang
  http.interceptors.request.use(config => {
    config.headers.common['Accept-Language'] = lang
    return config
  })
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `./translations/${lang}`).then(
        msgs => {
          i18n.setLocaleMessage(lang, msgs.default)
          loadedLanguages.push(lang)
          return setI18nLanguage(lang)
        }
      )
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
