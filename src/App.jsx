import { Routes, Route } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'

import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './Components/Footer'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

      </Route>
    </Routes>
  )
}

export default App