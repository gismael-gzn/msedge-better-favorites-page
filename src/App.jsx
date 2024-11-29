import { Route, Routes } from "react-router-dom"
import { Welcome } from "./pages/Welcome"
import { Favorites } from "./pages/Favorites"
import { Settings } from "./pages/Settings"
import { AppMenu } from "./components/AppMenu"
import { FavRoot } from "./components/FavRoot"
// import { NotFound } from "./pages/NotFound"

function App() {

  return (
    <>

      <nav className="h-screen w-96">
        <AppMenu />

        <div className="w-96 h-4/5 overflow-auto">
        <Routes>
            <Route path="favorites" element={<FavRoot />} />
        </Routes>
        </div>
      </nav>

      <div className="h-screen w-full">
      <Routes>

        <Route path="/" element={<Welcome />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="settings" element={<Settings />} />

      </Routes>
      </div>

    </>
  )
}

export default App
