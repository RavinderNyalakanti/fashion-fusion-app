import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import brand1 from "../assets/images/top_brands/brand1.png";
import brand2 from "../assets/images/top_brands/brand2.png";
import brand3 from "../assets/images/top_brands/brand3.png";

const TopBrands = () => {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, 
    
      {
        breakpoint: 520,
        settings: {
          dots: false,
            slidesToShow: 1
        }
    }
      
    ],
  };

  return (
    <div className="top-brands-section">
      <div className="heading-title">
        <h3>Top brands</h3>
      </div>
      <Slider {...settings}>
        <div>
          <img src={brand1} alt="Top Brands" />
        </div>
        <div>
          <img src={brand2} alt="Top Brands" />
        </div>
        <div>
          <img src={brand3} alt="Top Brands" />
        </div>
        <div>
          <img src={brand1} alt="Top Brands" />
        </div>
        <div>
          <img src={brand2} alt="Top Brands" />
        </div>
        <div>
          <img src={brand3} alt="Top Brands" />
        </div>
        <div>
          <img src={brand1} alt="Top Brands" />
        </div>
        <div>
          <img src={brand2} alt="Top Brands" />
        </div>
        <div>
          <img src={brand3} alt="Top Brands" />
        </div>
        <div>
          <img src={brand1} alt="Top Brands" />
        </div>
        <div>
          <img src={brand2} alt="Top Brands" />
        </div>
        <div>
          <img src={brand3} alt="Top Brands" />
        </div>
        
      </Slider>
    </div>
  );
};

export default TopBrands;
