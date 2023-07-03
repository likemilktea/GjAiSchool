import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 1. Ex01 - 변수와 state의 차이
// import App from './Ex01'
// 2. Ex02-state로 좋아요 실습
// import App from './Ex02'
// 3. Ex03 - 랜덤게임 실습
// import App from './Ex03'
// 4. mpa & Filter 함수 JS개념
import App from './Ex04'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
