import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 1. useEffect 사용해보기
// import App from './Ex01';
// 2. 랜덤게임 진행해보기
import App from './Ex02';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
