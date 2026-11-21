import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import App from "./App"
import type { Lang } from "./content/types"
export { content, paths } from "./i18n"

export const render = (lang: Lang) =>
  renderToString(
    <StrictMode>
      <App lang={lang} />
    </StrictMode>,
  )
