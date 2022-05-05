import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./Pages/Home"
import { BottomNav } from "./components/Navbar/BottomNav"
import { Women } from "./components/Navbar/NavData"

function App() {

  return (
    <div>
      <Navbar />
      <BottomNav data={Women} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
