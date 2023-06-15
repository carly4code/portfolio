import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery.js';
import PortfoBtn from "../components/PortfoBtn.js";
import zeroneImage from "../image/zerone-desktop.png";
import CUHKHomePage from "../image/CUHK-homePage.png";
import HvHomePage from "../image/Hv-homePAge.png";
import MLSHomePage from "../image/MLS-homePage.png";
import OBGHomePage from "../image/OBG-HomePage.png";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MobilePortfoilo = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={zeroneImage} />
        <p className='slider-text'>hello world</p>
      </div>
      <div>
        <img src={zeroneImage} />
        <p className='slider-text'>hello world</p>
      </div>
      <div>
        <img src={zeroneImage} />
        <p className='slider-text'>hello world</p>
      </div>
      <div>
        <img src={zeroneImage} />
        <p className='slider-text'>hello world</p>
      </div>
      <div>
        <img src={zeroneImage} />
        <p className='slider-text'>hello world</p>
      </div>
      <div>
        <img src={zeroneImage} />
        <p className='slider-text'>hello world</p>
      </div>
    </Slider>
  );
}

const DesktopPortfoilo = () => {
  const items = [
    {
        title: "Zerone",
        imageUrl: zeroneImage ,
    },
    {
        title: "OBG",
        imageUrl: OBGHomePage,
    },
    {
        title: "MLS",
        imageUrl: MLSHomePage,
    },
    {
      title: "Impact CU60",
      imageUrl: CUHKHomePage,
  },
    {
      title: "HealthView bioanalytic",
      imageUrl: HvHomePage,
  },
];

  return (
        <div className="work flex">
            <PortfoBtn items={items}/>
        </div>
  );
};

const Portfoilo = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="portfoilo">
      <div className="pageWrapper">
      <div className="section-head">Portfoilo</div>

        {isMobile ? <MobilePortfoilo /> : <DesktopPortfoilo />}
      </div>
    </section>
  );
};

export default Portfoilo;





