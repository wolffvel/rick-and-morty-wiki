import React, { useState } from 'react';
import ShowCharacters from '../components/ShowCharacters';

const Home = () => {
  const [query, setQuery] = useState('morty');

  return (
    <div className='page-body'>
      <h3 className='page-heading'>Type your search below...</h3>
      <input
        type='text'
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          console.log(query);
        }}
        className='input'
      />
      {query.length > 0 && <ShowCharacters query={query} />}
    </div>
  );
};

export default Home;
