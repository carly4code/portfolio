import React from 'react';
import Intro from './intro.js';
import About from './About.js';
import Portfoilo from './Portfoilo.js';
import Contact from './Contact.js';


const Home = () => {
    return (
        <div className="homePageOverview">
            <Intro />
            <About />
            <Portfoilo />
            <Contact />
        </div>
    )
}

export default Home;
