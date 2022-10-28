import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Link to='nestedRoute' className='button'>
          {' '}
          click me!
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Product;
