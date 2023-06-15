import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import zeroneDesktop from '../image/zerone-desktop.png';


export const PortfoBtn = ({
    items }) => {
    const [activeImage, setActiveImage] = useState(0);

    const handleEnter = (index) => {
        setActiveImage(index);
    };

    return (
        <>
                <div className='btn-container'>
                {items.map((item, index) => (

                     <Link to={`/project/${index + 1}`} target="_blank">
                    <a
                        key={index}
                        onMouseEnter={() => handleEnter(index)}
                        className="portfoilo-button"
                        target="_blank"
                    >
                        <div>{item.title}</div>
                        <div className="arrow">→</div>
                    </a>
                     </Link>
                ))}
                </div>

                <div className='img-container'>
                    {items.map((item, index) => (
                        <img
                            key={index}
                            src={item.imageUrl}
                            className={`change-image ${activeImage === index ? 'is-active' : ''}`}
                        />
                    ))}
                </div>

        </>
    )
}

export default PortfoBtn;


