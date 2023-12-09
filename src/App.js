import React from 'react';
import "./css/style.css";
import "./css/canva.css"

import GlobalStyles from "./css/Global.css";
import Header from "./components/Header.js";



const HomePageOverview = () => {

  return (
    <div className={GlobalStyles}>
      <Header />
    </div >
  );
};

export default HomePageOverview;
