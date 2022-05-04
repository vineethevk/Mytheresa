import { Route, Routes } from "react-router-dom"
import { Dropdown } from "./components/Navbar/Dropdown"
import { Navbar } from "./components/Navbar/Navbar"
import { Test } from "./Pages/Test"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Dropdown data={dropdown} />}></Route> */}
      </Routes>
    </div>
  )
}

export default App
