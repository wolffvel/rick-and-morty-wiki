import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ShowCharacters from '../components/ShowCharacters';
import Toggle from '../components/Toggle';

const Home = () => {
  const [query, setQuery] = useState('morty');
  const [theme] = useContext(ThemeContext);
  return (
    <div className='page-body'>
      <Toggle />
      <h3 className={theme ? 'page-heading' : 'page-heading dark'}>
        Type your search below...
      </h3>
      <input
        type='text'
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          console.log(query);
        }}
        className={theme ? 'input' : 'input dark'}
      />
      {query.length > 0 && <ShowCharacters query={query} />}
    </div>
  );
};

export default Home;
