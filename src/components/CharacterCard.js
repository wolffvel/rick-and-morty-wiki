import React from 'react';

const CharacterCard = props => {
  const { name, imgUrl, status, species, origin, lastLocation } = props;
  return (
    <div className='card'>
      <img src={imgUrl} alt='Character' />
      <h3>{name}</h3>
      <div className='card-container'>
        <span>Status</span>
        <p>{status}</p>
      </div>
      <div className='card-container'>
        <span>Species</span>
        <p>{species}</p>
      </div>
      <div className='card-container'>
        <span>Origin</span>
        <p>{origin}</p>
      </div>
      <div className='card-container'>
        <span>Location</span>
        <p>{lastLocation}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
