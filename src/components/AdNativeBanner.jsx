import { useEffect, useRef } from 'react'

/**
 * Native Banner async ad (PropellerAds)
 * Place between sections — renders a row of 4 native images by default.
 */
export default function AdNativeBanner() {
  const ref = useRef(null)
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current || !ref.current) return
    loaded.current = true

    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = 'https://bicea.org/21/32bb9169502296ac8dce0ca9add0f4db'
    ref.current.appendChild(script)
  }, [])

  return (
    <div ref={ref} aria-label="Advertisement" style={{ width: '100%' }}>
      <div id="container-32bb9169502296ac8dce0ca9add0f4db" />
    </div>
  )
}
