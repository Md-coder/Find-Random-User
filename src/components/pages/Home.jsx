import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Hello there!</h1>
      <p style={{ color: 'white' }}>Let's explore these pages together. Find the Users list 😁</p>
      <div style={{ marginBottom: '1rem' }}>
        <Link to='error' className='button' style={{ backgroundColor: '#B58B00' }}>
          Try me{' '}
        </Link>
        <Link to='product' className='button'>
          Try me{' '}
        </Link>
        <Link to='/users' className='button' style={{ backgroundColor: 'blue' }}>
          Try me{' '}
        </Link>
      </div>
    </div>
  );
};

export default Home;
