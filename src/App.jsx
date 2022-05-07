import { Footer } from "./components/Footer/footer"
import { Route, Routes } from "react-router-dom"
import { Dropdown } from "./components/Navbar/Dropdown"
import { Navbar } from "./components/Navbar/Navbar"
import { Test } from "./Pages/Test"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
