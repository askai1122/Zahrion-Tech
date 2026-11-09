import { useEffect, useRef } from 'react'

/**
 * 160×300 iframe ad (PropellerAds)
 * Safe to mount multiple times on the same page; each ref gets its own script injection.
 */
export default function AdBanner160x300() {
  const ref = useRef(null)
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current || !ref.current) return
    loaded.current = true

    // Options script
    const opts = document.createElement('script')
    opts.text = `
      window.atOptions = {
        'key':    '2c6103e80dd4bfb10d320b80d0735be2',
        'format': 'iframe',
        'height': 300,
        'width':  160,
        'params': {}
      };
    `
    ref.current.appendChild(opts)

    // Loader script
    const loader = document.createElement('script')
    loader.src = 'https://bicea.org/22/2c6103e80dd4bfb10d320b80d0735be2'
    loader.setAttribute('data-cfasync', 'false')
    ref.current.appendChild(loader)
  }, [])

  return (
    <div
      ref={ref}
      style={{ width: 160, height: 300, overflow: 'hidden', flexShrink: 0 }}
      aria-label="Advertisement"
    />
  )
}
