import React from 'react';
import './style.css';

const Pagination = ({
  usersPerPage,
  totalUsers,
  handlePageChange,
  handlePrev,
  handleNext,
  pageNumber,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalUsers / usersPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className='flex_numbers'>
        <button className='btn' onClick={() => handlePrev()}>
          Prev &#8592;
        </button>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page_numbers ${pageNumber === number ? 'is_active' : ''}`}
            onClick={() => handlePageChange(number)}
          >
            <p style={{ textDecoration: 'none', color: 'black' }}>{number}</p>
          </li>
        ))}
        <button className='btn' onClick={() => handleNext(pageNumbers.length)}>
          Next &#8594;
        </button>
      </ul>
    </>
  );
};

export default Pagination;
