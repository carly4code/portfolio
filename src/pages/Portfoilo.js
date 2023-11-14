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
        <p className='slider-text'>Zero One Coffee & Roastery</p>
      </div>
      <div>
        <img src={OBGHomePage} />
        <p className='slider-text'>OBG</p>
      </div>
      <div>
        <img src={MLSHomePage} />
        <p className='slider-text'>MLS</p>
      </div>
      <div>
        <img src={CUHKHomePage} />
        <p className='slider-text'>Impact CU60</p>
      </div>
      <div>
        <img src={HvHomePage} />
        <p className='slider-text'>HealthView bioanalytic</p>
      </div>

    </Slider>
  );
}

const DesktopPortfoilo = () => {
  const items = [
    {
        title: "OBG",
        imageUrl: OBGHomePage,
        link: "https://www.obg.cuhk.edu.hk/"
    },
    {
        title: "MLS",
        imageUrl: MLSHomePage,
        link:"https://path01.acp.cuhk.edu.hk/mls/"
    },
    {
      title: "Impact CU60",
      imageUrl: CUHKHomePage,
      link: "https://socialimpact.cuhk.edu.hk/",
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





