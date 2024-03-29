import React from 'react';

const Paginate = props => {
  const { page, pages, paginate } = props;
  const numbers = [];

  for (let i = 1; i <= pages; i++) {
    numbers.push(i);
  }
  return (
    <ul className='paginate'>
      {numbers.map(number => (
        <li
          className={page === number ? 'paginate-item active' : 'paginate-item'}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
