import { create } from "zustand"
import type { SiteKind } from "@/content/types"

export type EnquiryPath = "web" | "team"

type EnquiryState = {
  path: EnquiryPath
  site: SiteKind
  setPath: (path: EnquiryPath) => void
  pickSite: (site: SiteKind) => void
}

export const useEnquiry = create<EnquiryState>()((set) => ({
  path: "web",
  site: "unsure",
  setPath: (path) => set({ path }),
  pickSite: (site) => set({ path: "web", site }),
}))
