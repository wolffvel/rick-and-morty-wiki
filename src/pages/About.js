import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div className='page-body'>
      <div className='page-container'>
        <h2 className={theme ? 'page-heading' : 'page-heading dark'}>About</h2>
        <p className={theme ? 'content' : 'content dark'}>
          This a mini Rick and Morty wiki where you can search for caracters and
          see a few facts about them.
        </p>
        <h2 className={theme ? 'page-heading' : 'page-heading dark'}>
          What technologies are being used in this site?
        </h2>
        <p className={theme ? 'content' : 'content dark'}>
          This was made with ReactJS, the styling was made with Sass using the
          SCSS syntax and the routing was handled with Reach Router. The data
          was fetched from the{' '}
          <a
            className={theme ? '' : 'link-dark'}
            href='https://rickandmortyapi.com/'
          >
            Rick and Morty API
          </a>{' '}
          using the GraphQL endpoint.
        </p>
        <h2 className={theme ? 'page-heading' : 'page-heading dark'}>
          Why does this exist?
        </h2>
        <p className={theme ? 'content' : 'content dark'}>
          This Site was made by me to learn React, GraphQL and Sass
        </p>
      </div>
    </div>
  );
};

export default About;
