import { createContext, use } from "react"
import { cs } from "./content/cs"
import { en } from "./content/en"
import type { Lang } from "./content/types"

export const content = { cs, en }
export const EMAIL = "michelle.hav17@gmail.com"
export const paths: Record<Lang, string> = { cs: "/", en: "/en/" }

export const langFromPath = (path: string): Lang => (path.startsWith("/en") ? "en" : "cs")

export const LangContext = createContext<Lang>("cs")
export const useLang = () => use(LangContext)
export const useContent = () => content[useLang()]
