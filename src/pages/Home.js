import React from 'react';
import Intro from './intro.js';
import About from './About.js';
import Portfoilo from './Portfoilo.js';
import Contact from './Contact.js';
import BackToTopButton from '../components/BackToTop.js';

//Todo: add a 'language I wrote'
const Home = () => {
    return (
        <div className="homePageOverview">
            <Intro />
            <About />
            <Portfoilo />
            <Contact />
            <BackToTopButton />
        </div>
    )
}

export default Home;
