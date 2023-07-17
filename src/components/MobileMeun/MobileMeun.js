import React from 'react';
import { bool, func } from 'prop-types';
import { StyledMenu } from './MobileMeun.styled';


const MobileMeun = ({ open, ...props }) => {

    return (
        <StyledMenu open={open} {...props}>
            {...props}
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default MobileMeun;