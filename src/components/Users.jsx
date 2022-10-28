import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Pagination from './Pagination';
import Table from './Table';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [usersPost] = useState(10);

  const indexOfLastUserPost = pageNumber * usersPost;
  const indexOfFirstUserPost = indexOfLastUserPost - usersPost;
  const currentUsersPosts = users.slice(indexOfFirstUserPost, indexOfLastUserPost);

  const handleNext = (pageLength) => {
    if (pageNumber === pageLength) return;

    setPageNumber(pageNumber + 1);
  };

  const handlePrev = () => {
    if (pageNumber === 1) return;

    setPageNumber(pageNumber - 1);
  };
  const handlePageChange = (number) => {
    setPageNumber(number);
  };

  useEffect(() => {
    const randomUser = async () => {
      setLoading(true);
      const response = await fetch('https://randomuser.me/api/?results=200');
      if (response.status === 401) {
        window.location('/notFound');
      } else {
        response.json().then((data) => {
          setLoading(false);
          setUsers(data.results);
        });
      }
    };

    randomUser();
  }, []);
  return (
    <>
      <Table users={currentUsersPosts} loading={loading} />
      <Pagination
        usersPerPage={usersPost}
        totalUsers={users.length}
        handlePageChange={handlePageChange}
        handlePrev={handlePrev}
        handleNext={handleNext}
        pageNumber={pageNumber}
      />
    </>
  );
};

export default Users;
