import React from 'react';
import spinner from './assets/spinner.gif';

const Table = ({ users, loading }) => {
  if (loading) {
    return (
      <>
        <iframe
          title='loading'
          src={spinner}
          width='407'
          height='407'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </>
    );
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user.login.uuid}>
            <tr>
              <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td>{user.location.country}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default Table;
