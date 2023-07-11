import { useState,useEffect  } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Talk from './components/Talk';
import Login from './components/Login';


function App() {
  const [article, setArticle] = useState([])

  let url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fa8d9d2a4b2a41b6805c902f4a3d8929'

  /*
    Mission 1) 기사 데이터를 가지고 와보자!
    - axios 사용
    - get 방식
    - console 창에 기사와 관련된 배열을 띄워보자
    -캡쳐해서 단톡방에 업로드
  */
   
  const getArticle = () => {
    // axios.get(url)
    //   .then(res => {
    //     setArticle(res.data.articles);})
    //     .catch(error => {
    //       console.log(error);
    //     });
  }
  useEffect(()=>{
    getArticle()
   },[])
   

  return (
    <div className="App">
      <h1>Today News</h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main article={article}/>}></Route>
        <Route path='/talk' element={<Talk/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
