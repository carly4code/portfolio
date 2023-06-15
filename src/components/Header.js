import React  from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header pageWrapper">
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
    </div>
  );
}
export default Header;
