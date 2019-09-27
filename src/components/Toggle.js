import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Toggle = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <>
      <label className='switch'>
        <input
          onClick={() => {
            document.body.classList.toggle('body-dark');
            setTheme(!theme);
          }}
          type='checkbox'
        />
        <span className='slider round'></span>
      </label>
      <h4 className={theme ? 'page-heading' : 'page-heading dark'}>
        Toggle Theme
      </h4>
    </>
  );
};

export default Toggle;
