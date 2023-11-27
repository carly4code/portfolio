import React, { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery.js';
import ArrowBtn from '../components/ArrowBtn.js';
import PortfoBtn from "../components/PortfoBtn.js";
import zeroneImage from "../image/zerone-desktop.png";
import CUHKHomePage from "../image/CUHK-homePage.png";
import HvHomePage from "../image/Hv-homePAge.png";
import MLSHomePage from "../image/MLS-homePage.png";
import OBGHomePage from "../image/OBG-HomePage.png";
import OLRHomePage from "../image/OLR-HomePage.png";
import CharityHomePage from "../image/charity-mobile.png";
import BetaHomePage from "../image/beta-mobile.png";


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
      link: "https://path01.acp.cuhk.edu.hk/mls/"
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
    {
      title: "Our Lady of the Rosary College",
      imageUrl: OLRHomePage,
      link: "https://www2.olr.edu.hk/"
    }
  ];


  return (
    <div className="work flex">
      <PortfoBtn items={items} />
    </div>
  );
};



const Portfoilo = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const reactItems = [
    {
      title: "Charity Finder",
      subtitle: "A charity finder application for finding your chairty",
      imageUrl: CharityHomePage,
      link: "https://charity-finder-36jpjfeh7-carly4codes-projects.vercel.app/"
    },
    {
      title: "Beta portal",
      subtitle: "ACCOUNT LOGIN\nemployee:EMP40005 password:de12345\nmanager:MAN30002 password:mm12345",
      imageUrl: BetaHomePage,
      link: "https://betaportal.netlify.app/"
    },
  ]

  const [activeTab, setActiveTab] = useState('CMS');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const Tab = ({ label, isActive, content }) => {
    return (
      <button
        className={`tablinks ${isActive ? 'active' : ''}`}
        onClick={() => openTab(content)}>
        {label}
      </button>
    );
  };


  return (
    <section id="portfoilo">
      <div className="pageWrapper">
        <div className="section-head">Portfolio</div>
        <div className="tab">
          <Tab label="CMS" isActive={activeTab === 'CMS'} content="CMS" />
          <Tab label="React" isActive={activeTab === 'React'} content="React" />
        </div>

        {activeTab === 'CMS' && (
          <div id="CMS" className="tabcontent">
            {isMobile ? <MobilePortfoilo /> : <DesktopPortfoilo />}
          </div>
        )}

        {activeTab === 'React' && (
          <div id="React" className="tabcontent">
            <div className="work flex">
              <PortfoBtn items={reactItems} />
            </div>
          </div>
        )}
      </div>

    </section>
  );
};

export default Portfoilo;





