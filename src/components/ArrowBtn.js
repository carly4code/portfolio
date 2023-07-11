import React from 'react';
import arrow from '../image/Arrow_4.svg'

export const ArrowBtn = ({
    label,
    ...props }) => {
    return (
        <div className="contact-button">
            <div>{label}</div>
            <img src={arrow} />
        </div>

    )
}

export default ArrowBtn;