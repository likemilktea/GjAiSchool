import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
    console.log('users :',users);
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;