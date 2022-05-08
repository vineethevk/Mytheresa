import { Footer } from "./components/Footer/footer"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./Pages/HomePage/Home"
import { LoginAndRegister } from "./Pages/LogIn/LoginAndRegister"
import { WomenPage } from "./Pages/women/WomenPage"
import { WomenProducts } from "./Pages/women/WomenProducts"
import { MenProducts } from "./Pages/MenPage/MenProducts"
import { MenPage } from "./Pages/MenPage/MenPage"
import Card from "./Pages/CartPage/components/Card"
// import { Card } from "./Pages/Test/Card"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/women" element={<WomenPage />}></Route>
        <Route path="/womenproducts" element={<WomenProducts />}></Route>
        <Route path="/men" element={<MenPage />}></Route>
        <Route path="/menproducts" element={<MenProducts />}></Route>
        <Route path="/login" element={<LoginAndRegister />}></Route>
        <Route path="/test" element={<Card />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
