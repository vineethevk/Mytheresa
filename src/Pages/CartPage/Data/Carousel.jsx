import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { chevron-right } from "react-icons/fa";
import { FaHeart, FaRegHeart, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import "./carousel.css";
// import { data } from "./data.js"
import { useEffect, useState } from "react";
import axios from "axios";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} /> */}
      <FaAngleLeft style={{ color: 'black', fontSize: '50px' }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>

      <FaAngleRight style={{ color: 'black', fontSize: '50px' }} />
    </div>
  );
};

const Carousel = ({ image }) => {


  return (
    <div className="carousel">

      <Slider className="Slider"
        autoplay
        autoplaySpeed={2000}
        dots={true}
        // Default={Default}
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div >
              <img
                src={image[i]}
                alt=""
                style={{
                  width: "50px",
                  // height: "50px",
                  // objectFit: "cover",
                  // borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {image.map((item) => (
          <div className="BigImg" key={item}>
            <img src={item} />
            {/* <img src={item} alt="" style={{ width: "60%", height: "60vh", justifyContent: "center" }} /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};








//   return (
//     <div className="carousel">

//       <Slider className="Slider"
//         autoplay
//         autoplaySpeed={2000}
//         dots={true}
//         // Default={Default}
//         initialSlide={2}
//         infinite
//         prevArrow={<PreviousBtn />}
//         nextArrow={<NextBtn />}
//         customPaging={(i) => {
//           return (
//             <div >
//               <img
//                 src={data.images[i]}
//                 alt=""
//                 style={{
//                   width: "50px",
//                   // height: "50px",
//                   // objectFit: "cover",
//                   // borderRadius: "10px",
//                 }}
//               />
//             </div>
//           );
//         }}
//         dotsClass="slick-dots custom-indicator"
//       >
//         {data.images.map((item) => (
//           <div className="BigImg">
//             <img src={item} />
//             {/* <img src={item} alt="" style={{ width: "60%", height: "60vh", justifyContent: "center" }} /> */}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
export default Carousel;
