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
import './App.css'
import MainCart from "./Pages/cart/MainCart"


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
        <Route path="/product/women/:id" element={<Card link={"http://18.212.97.104:8080/womensdata1"} />}></Route>
        <Route path="/product/men/:id" element={<Card link={"http://3.86.143.44:5050/mensdata1"} />}></Route>
        <Route path="/cart" element={<MainCart />}></Route>
      </Routes>
      <Footer />
    </div >
  )
}

export default App
