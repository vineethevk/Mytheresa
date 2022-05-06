import "./Women.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const MywomenSlider=()=> {


  const renderSlides = () =>
  [{img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/73/P00675419.jpg",protitle:"GUCCI",proprice:"€ 749"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/7b/P00667499.jpg",protitle:"JW ANDERSON",proprice:"€ 319"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/9b/P00649918.jpg",protitle:"PARIS TEXAS",proprice:"€ 335"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/df/P00642695.jpg",protitle:"MACH & MACH",proprice:"€ 919"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/da/P00655737.jpg",protitle:"BALENCIAGA",proprice:"€ 415"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/c3/P00675084.jpg",protitle:"GUCCI",proprice:"€ 635"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/78/P00694477.jpg",protitle:"GUCCI",proprice:"€ 2,105"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/41/P00649930.jpg",protitle:"PARIS TEXAS",proprice:"€ 335"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/f0/P00677180.jpg",protitle:"GUCCI",proprice:"€ 1,765"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/96/P00676826.jpg",protitle:"GUCCI",proprice:"€ 395"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ec/P00655739.jpg",protitle:"BALENCIAGA",proprice:"€ 460"},
  {img:"https://img.mytheresa.com/420/475/95/jpeg/catalog/product/fc/P00688128.jpg",protitle:"ALIGHIERI",proprice:"€ 485"},
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
      <p className="headingof">Women's New Arrivals</p>
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





