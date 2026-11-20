import { useSyncExternalStore } from "react"

const KEY = "app-theme"
const root = () => document.documentElement

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(root(), { attributes: true, attributeFilter: ["class"] })
  return () => observer.disconnect()
}

export const useIsDark = () =>
  useSyncExternalStore(subscribe, () => root().classList.contains("dark"), () => false)

export function toggleTheme() {
  const dark = root().classList.toggle("dark")
  try {
    localStorage.setItem(KEY, JSON.stringify({ state: { theme: dark ? "dark" : "light" }, version: 0 }))
  } catch {
    return
  }
}
