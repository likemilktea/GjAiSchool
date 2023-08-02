import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import {useEffect} from 'react'

const App = () => {

  useEffect(() => {
    
    fetch("http://127.0.0.1:5000/users").then(
      // response 객체의 json() 이용하여 json 데이터를 객체로 변화
      res => res.json()
    ).then(
      // 데이터를 콘솔에 출력
      data => console.log('log :',data)
    )
  }, [])


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;