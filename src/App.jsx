import { Route, Routes } from "react-router-dom"
// import { Dropdown } from "./components/Navbar/Dropdown"
// import { Navbar } from "./components/Navbar/Navbar"
import { Test } from "./Pages/Test"
import { Womens } from "./Pages/women/Womens"
import { WomensList } from "./Pages/women/WomensProduct"

function App() {

  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/womensproduct" element={<WomensList />}></Route>
        {/* <Route path="/" element={<Dropdown data={dropdown} />}></Route> */}
      </Routes>
    </div>
  )
}

export default App
