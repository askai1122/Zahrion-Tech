import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()
const THEME_KEY = 'zahriontech-theme-v2'

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved) setDark(saved === 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light')
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(p => !p) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
