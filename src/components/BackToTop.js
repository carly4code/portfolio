import React, { useState, useEffect } from 'react';
import arrow from '../image/Arrow_4.svg'

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`back-to-top-btn ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <div class="arrow" style={{transform: 'rotate(270deg)',
    border: '1px solid',
    padding: 10,
    background: '#ffffff40',
    maxWidth: 64,
    position: 'absolute',
    right: '2rem'}}>→</div>
 </div>
    );
};

export default BackToTopButton;