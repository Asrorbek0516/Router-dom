import { createBrowserRouter,RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contacts />
  }
])

function App() {
  return <RouterProvider router={routes} />
}

export default App