// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/users') // 플라스크 서버의 URL로 변경해야 합니다.
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList users={users} />} />
        <Route path="/user/:id" element={<UserDetails users={users} />} />
      </Routes>
    </Router>
  );
};

export default App;