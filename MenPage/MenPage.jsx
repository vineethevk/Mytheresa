
import "./MenPage.css"

import "../../components/Navbar/BottomNav.css"
import { BottomNav } from "../../components/Navbar/BottomNav"
import { Women } from "../../components/Navbar/NavData"
import { MymenSlider } from "./Men"
import { MywomenSlider } from "../HomePage/WnewArrival/Women"

export const MenPage = () => {

  const data = Women;
  return (<>
    <BottomNav data={data} />
    <div className="container">
      <div className="mimage">
        <img  src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_CW18_2022/BIG1/2x/BIG_1_TABLET_2X_1_20220502141254.jpg?imwidth=1024&imdensity=1" />
      </div>
      <MymenSlider/>
      <div className="mimage">
        <img id="mimg" src="https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-32-8h2n0YQtr.jpg" />
      </div>
    <MymenSlider/>
    <div className="mimage">
        <img id="mimg" src="https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_men_s_clothing_banner_template_13_1200x628.jpg" />
      </div>
      <MywomenSlider/>
    </div>

  </>
  )
}