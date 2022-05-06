import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { WomensList } from "./Pages/women/WomensProduct"
import { Womens } from "./Pages/women/WomensPage"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/womenproducts" element={<WomensList />}></Route>
        {/* <Route path="/" element={<Dropdown data={dropdown} />}></Route> */}
      </Routes>
    </div>
  )
}

export default App
