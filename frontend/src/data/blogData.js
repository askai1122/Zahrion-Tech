import { postsEn } from './blogEn'
import { postsDe } from './blogDe'

// Every post exists in English and German; `pair` is the slug of the translation (used for hreflang + language switcher).
export const posts = [...postsEn, ...postsDe]
