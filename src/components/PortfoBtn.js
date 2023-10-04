import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
                    <Link to={item.link ? item.link : `/project/${index + 1}`} target="_blank">
                        <div className='flex'>
                            <a
                            key={index}
                            onMouseEnter={() => handleEnter(index)}
                            className="portfoilo-button"
                            target="_blank"
                        >
                            <div>{item.title}</div>
                        </a>
                            <div className="arrow">→</div>
                        </div>
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


