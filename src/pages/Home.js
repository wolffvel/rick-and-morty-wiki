import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { InputContext } from '../context/InputContext';
import ShowCharacters from '../components/ShowCharacters';
import Toggle from '../components/Toggle';

const Home = () => {
  const [input, setInput] = useContext(InputContext);
  const [theme] = useContext(ThemeContext);
  return (
    <div className='page-body'>
      <Toggle />
      <h3 className={theme ? 'page-heading' : 'page-heading dark'}>
        Type your search below...
      </h3>
      <input
        type='text'
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
        className={theme ? 'input' : 'input dark'}
      />
      {input.length > 0 && <ShowCharacters query={input} />}
    </div>
  );
};

export default Home;
