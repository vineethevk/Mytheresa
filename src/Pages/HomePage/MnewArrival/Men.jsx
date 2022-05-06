import React from "react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const MymenSlider=()=> {

//   let arr=[{Name:"ayaz",age:20},
// {Name:"riyaz",age:26},{Name:"raj",age:15}{Name:"munty",age:19}
// ]
  const renderSlides = () =>
  [{img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/1e/P00674087.jpg",protitle:"GUCCI",proprice:"€ 2,019"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f6/P00647871.jpg",protitle:"GIVENCHY",proprice:"€ 2,179"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/58/P00689620.jpg",protitle:"BALENCIAGA",proprice:"€ 330"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/56/P00647766.jpg",protitle:"GIVENCHY",proprice:"€ 749"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/85/P00611680.jpg",protitle:"TOM FORD",proprice:"€ 515"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a8/P00647820.jpg",protitle:"GIVENCHY",proprice:"€ 2,179"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a8/P00675846.jpg",protitle:"VALENTINO",proprice:"€ 499"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/5d/P00611722.jpg",protitle:"TOM FORD",proprice:"€ 945"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/0b/P00651606.jpg",protitle:"AMI PARIS",proprice:"€ 325"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/d9/P00674142.jpg",protitle:"GUCCI",proprice:"€ 489"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/d2/P00648511.jpg",protitle:"NANUSHKA",proprice:"€ 359"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f6/P00648518.jpg",protitle:"NANUSHKA",proprice:"€ 335"},
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
      <p className="headingof">Men's New Arrivals</p>
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





