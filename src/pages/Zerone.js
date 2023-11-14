import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LinkIcon from "../image/link-icon.svg";
// import Button from "../components/ArrowBtn.js";

import { useParams } from 'react-router-dom';






const detail = [
    {
        subtitle: "Zerone",
        title: "Zero One Coffee & Roastery",
        overview: "A website for cafe",
        structure: "Home page, Access(instruction of getting to the shop), Shop, Menu of the shop",
        img: {
            img1: "/images/zerone-desktop.png",
            img2: "/images/zerone-desktop.png",
            img3: "/images/zerone-desktop.png"
        }
    },
];


const imgShowcase = () => {
    return (
        <>
            {detail &&
                <div>
                    {Object.keys(detail[0].img).map((key) => (
                        <div className="showcase" key={key}>
                            <img src={detail[0].img[key]} alt={`Image ${key}`} />
                        </div>
                    ))}
                </div>
            }
        </>
    );
};

const Zerone = () => {

    return (
        <div className="pageWrapper">


            {detail &&
                <>
                    <div className='project-text'>
                        <div className="section-head">{detail.title}</div>
                        {detail.link
                            ? <><a href={detail.link} target="_blank"><img src={LinkIcon} /></a></>
                            : null}
                        <div className='project-detail'>
                            <p>Overview:{detail.overview}</p><br></br>
                            <p>Structure: {detail.structure}</p>
                        </div>
                    </div>

                    <div className='showcase-outter'>
                        {imgShowcase}
                    </div>

                    <div className='button-group'>
                        {/* <div className='prev-btn'><Button label="Previous" /></div>
                            <div className='next-btn'><Button label="Next" /></div> */}
                    </div></>
            }
        </div >
    );
};

export default Zerone;






