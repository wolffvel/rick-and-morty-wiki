import React from 'react';

const CharacterCard = props => {
  const { name, imgUrl, status, species, origin, lastLocation } = props;
  return (
    <div className='card'>
      <img src={imgUrl} alt='Character' className='card-img' />
      <div className='card-container'>
        <h3 className='card-text'>{name}</h3>
      </div>
      <div className='card-container'>
        <span className='card-span'>Status:</span>
        <p className='card-text'>{status}</p>
      </div>
      <div className='card-container'>
        <span className='card-span'>Species:</span>
        <p className='card-text'>{species}</p>
      </div>
      <div className='card-container'>
        <span className='card-span'>Origin:</span>
        <p className='card-text'>{origin}</p>
      </div>
      <div className='card-container'>
        <span className='card-span'>Location:</span>
        <p className='card-text'>{lastLocation}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
