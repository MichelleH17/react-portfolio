import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { langFromPath } from "./i18n"

const root = document.getElementById("root")!
const app = (
  <StrictMode>
    <App lang={langFromPath(location.pathname)} />
  </StrictMode>
)

if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
