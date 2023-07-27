import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import Info from './components/Info';

const App = () => {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/info' element={<Info />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;