import { Route, Routes } from "react-router-dom"
import { BigdivKid } from "./components/Bigposter/BigdivKid"
import { BigdivMW } from "./components/Bigposter/BigdivMW"
import { MykidSlider } from "./components/KnewArrival/Kid"
import { MymenSlider } from "./components/MnewArrival/Men"



import { Navbar } from "./components/Navbar/Navbar"
import { Stickydiv } from "./components/Sticky wraper/Stickydiv"
import { MywomenSlider } from "./components/WnewArrival/Women"







import { Test } from "./Pages/Test"

function App() {

  return (
    <div>
      <Navbar />
      <Stickydiv/>
      <BigdivMW/>
      <BigdivKid/>
      <MywomenSlider/>
      <MymenSlider/>
      <MykidSlider/>
      
      <Routes> 
      </Routes>
    </div>
  )
}

export default App
