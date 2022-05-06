import { BigdivKid } from "./Bigposter/BigdivKid"
import { BigdivMW } from "./Bigposter/BigdivMW"
import { MykidSlider } from "./KnewArrival/Kid"
import { MymenSlider } from "./MnewArrival/Men"
// import { Navbar } from "./HomePage/Navbar/Navbar"
import { Stickydiv } from "./Sticky wraper/Stickydiv"
import { MywomenSlider } from "./WnewArrival/Women"
import { Hrline } from "./Navbar/Hrline"



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

