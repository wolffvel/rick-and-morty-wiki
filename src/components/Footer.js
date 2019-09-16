import React from 'react';

const Footer = () => {
  const date = new Date();
  return (
    <footer className='footer'>
      <p className='footer-text'>
        {date.getFullYear()} - Created by{' '}
        <a className='footer-text' href='https://github.com/wolffvel'>
          Pablo Wolff
        </a>
      </p>
    </footer>
  );
};

export default Footer;
