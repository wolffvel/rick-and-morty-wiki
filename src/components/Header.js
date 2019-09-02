import React from 'react';
import { Link } from '@reach/router';
import logo from '../images/logo.png';

const Header = () => {
  console.log(this);
  const isActive = ({ isCurrent }) => {
    return isCurrent
      ? { className: 'header-nav--link active' }
      : { className: 'header-nav--link' };
  };
  return (
    <header className='header'>
      <div className='header-container'>
        <img className='header-logo' src={logo} alt='' />
        <nav className='header-nav'>
          <Link className='header-nav--link' to='/' getProps={isActive}>
            Home
          </Link>
          <Link className='header-nav--link' to='/about' getProps={isActive}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
