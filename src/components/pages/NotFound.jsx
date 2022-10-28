import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>!Oops Page not found </h1>
      <Link to='/users' className='button'>
        Users
      </Link>
    </div>
  );
};

export default NotFound;
