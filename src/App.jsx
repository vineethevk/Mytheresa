import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./Pages/HomePage/Home"
import { LoginAndRegister } from "./Pages/LogIn/LoginAndRegister"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginAndRegister />}></Route>
      </Routes>
    </div>
  )
}

export default App
