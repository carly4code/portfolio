import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const BurgerMenu = ({ open, setOpen, ...props }) => {


  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default BurgerMenu;