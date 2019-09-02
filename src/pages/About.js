import React from 'react';

const About = () => {
  return (
    <div className='page-body'>
      <div className='page-container'>
        <h2 className='page-heading'>About</h2>
        <p className='content'>
          This a mini Rick and Morty wiki where you can search for caracters and
          see a few facts about them.
        </p>
        <h2 className='page-heading'>
          What technologies are being used in this site?
        </h2>
        <p className='content'>
          This was made with ReactJs, the styling was made with Sass using the
          SCSS syntax and the routing was handled with Reach Router. The data
          was fetched from the{' '}
          <a href='https://rickandmortyapi.com/'>Rick and Morty API</a> using
          the GraphQL endpoint.
        </p>
        <h2 className='page-heading'>Why does this exist?</h2>
        <p className='content'>
          This Site was made by me to learn React, GraphQL and Sass
        </p>
      </div>
    </div>
  );
};

export default About;
