import { BigdivKid } from "./HomePage/Bigposter/BigdivKid"
import { BigdivMW } from "./HomePage/Bigposter/BigdivMW"
import { MykidSlider } from "./HomePage/KnewArrival/Kid"
import { MymenSlider } from "./HomePage/MnewArrival/Men"
// import { Navbar } from "./HomePage/Navbar/Navbar"
import { Stickydiv } from "./HomePage/Sticky wraper/Stickydiv"
import { MywomenSlider } from "./HomePage/WnewArrival/Women"
import { Hrline } from "./HomePage/Navbar/Hrline"



export const Home = () => {

  return (
    <div>
      <Hrline />
      <br />
      <Stickydiv />
      <BigdivMW />
      <BigdivKid />
      <MywomenSlider />
      <MymenSlider />
      <MykidSlider />
    </div>
  )
}

