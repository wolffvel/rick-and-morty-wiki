import React from 'react';

const Footer = () => {
  const date = new Date();
  return (
    <footer className='footer'>
      <p className='footer-text'>{date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
