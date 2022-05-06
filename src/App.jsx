import { Route, Routes } from "react-router-dom"
import { Dropdown } from "./components/Navbar/Dropdown"
import { Navbar } from "./components/Navbar/Navbar"
import { Test } from "./Pages/Test"
import { WomensList } from "./Pages/women/WomensProduct"
import {WomensProduct} from "./Pages/women/Womens"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Womens" element={<WomensList/>}></Route>
        <Route path="/WomensProduct" element={<WomensProduct/>}></Route>
        {/* <Route path="/" element={<Dropdown data={dropdown} />}></Route> */}
      </Routes>
    </div>
  )
}

export default App
