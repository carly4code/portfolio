import React, { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery.js';
import Burger from './BurgerButton/BurgerMenu.js';
import { StyledMenu } from './MobileMeun/MobileMeun.styled';



const NavItem = () => {
  return (
    <ul>
      <li>
        <a href="/#home">Home</a>
      </li>
      <li>
        <a href="/#about">About</a>
      </li>
      <li>
        <a href="/#portfoilo">Portfolio</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
    </ul>
  );
}

const DesktopHeader = () => {
  return (
    <NavItem />
  );
}
const MobileHeader = () => {
  const [open, setOpen] = useState(false);



  return (
    <div>
      <Burger open={open} setOpen={setOpen} />
      <StyledMenu open={open}>
      <NavItem />
      </StyledMenu>
    </div>
  );

}

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="header pageWrapper">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </div>

  );
};
export default Header;
