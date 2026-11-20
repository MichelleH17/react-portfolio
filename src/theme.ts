import { useSyncExternalStore } from "react"

// Same key and shape the inline script in index.html reads before first paint.
const KEY = "app-theme"
const root = () => document.documentElement

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(root(), { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}

// Server render (prerender) has no theme, so it renders light and corrects itself after hydration.
export const useIsDark = () =>
  useSyncExternalStore(subscribe, () => root().classList.contains("dark"), () => false)

export function toggleTheme() {
  const dark = root().classList.toggle("dark")
  try {
    localStorage.setItem(KEY, JSON.stringify({ state: { theme: dark ? "dark" : "light" }, version: 0 }))
  } catch {
    /* storage blocked: the choice just isn't remembered */
  }
}
