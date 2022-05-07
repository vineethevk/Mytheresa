import React from "react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const MykidSlider=()=> {

//   let arr=[{Name:"ayaz",age:20},
// {Name:"riyaz",age:26},{Name:"raj",age:15}{Name:"munty",age:19}
// ]
  const renderSlides = () =>
  [{img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ad/P00685851.jpg",protitle:"MINI RODINI",proprice:"€ 105"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/35/P00661470.jpg",protitle:"VERSACE KIDS",proprice:"€ 175"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/44/P00657298.jpg",protitle:"MONCLER ENFANT",proprice:"€ 245"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/eb/P00661409.jpg",protitle:"VERSACE KIDS",proprice:"€ 419"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/c0/P00661440.jpg",protitle:"VERSACE KIDS",proprice:"€ 205"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/3d/P00661454.jpg",protitle:"VERSACE KIDS",proprice:"€ 159"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/42/P00658951.jpg",protitle:"BONPOINT",proprice:"€ 115"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/15/P00658459.jpg",protitle:"BONPOINT",proprice:"€ 115"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/bc/P00685341.jpg",protitle:"ZIMMERMANN KIDS",proprice:"€ 145"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ad/P00658240.jpg",protitle:"BONPOINT",proprice:"€ 165"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/dc/P00659802.jpg",protitle:"ERL KIDS",proprice:"€ 245"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/8a/P00686261.jpg",protitle:"ACNE STUDIOS KIDS",proprice:"€ 115"},
].map(num => (
    
      <div className="my1slides">
        <img className="proimg" src={num.img} alt="" />
        <div class="protitle"> <span class="ph1">{num.protitle}</span></div>
        <div class="proprice"> <span class="price">{num.proprice}</span></div>
      </div>
    ));

    function Arrow(props) {
      let className = props.type === "next" ? "nextArrow" : "prevArrow";
      className += " arrow";
      const char = props.type === "next" ? ">" : "<";
      return (
        <span className={className} onClick={props.onClick}>
          {char}
        </span>
      );
    }

  return (
    <div className="masterslide">
    <div className="myApp">
      <p className="headingof">Kids's New Arrivals</p>
      <Slider
      
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        dots={false}
        slidesToShow={4}
        slidesToScroll={4}
        autoplay={false}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
      >
        {renderSlides()}
      </Slider>
      
      <p className="viewallof">VIEW All</p>
    </div>
    </div>
  );
}





