import { useLocation } from 'react-router-dom'
import { isDePath, stripLang } from './config'
import { ui } from './ui'

export function useLang() {
  const { pathname } = useLocation()
  const lang = isDePath(pathname) ? 'de' : 'en'
  return { lang, pathname, basePath: stripLang(pathname) }
}

export function useUI() {
  const { lang } = useLang()
  return ui[lang]
}
