import { Link } from 'react-router-dom'
import { localize } from './config'
import { useLang } from './useLang'

// Drop-in replacement for react-router's <Link> that keeps the visitor in their language.
export default function LocalLink({ to, ...props }) {
  const { lang } = useLang()
  return <Link to={localize(to, lang)} {...props} />
}
