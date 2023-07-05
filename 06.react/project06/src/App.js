import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import Board from './pages/Board';
import Detail from './pages/Detail';
import MenuBar from './pages/MenuBar';

function App() {
  /* 라우팅 기능을 사용해보자!
    - 라우팅 (Routing) : 사용자가 요청한 URL에 따라 그에 적합한 페이지를 보여주는 것
      ex) 사용자 "메인페이지 보여줘!" <- Main Page 제공
                "로그인 페이지 보여줘" <-- Login Page 제공
          ====> 이러한 과정을 Routing이라고 한다.
    - 리액트는 Single Page Application임, 여러개의 페이지를 사용하는 라이브러리가 아님
      신규 페이지를 불러오는 것이 아니라, 하나의 페이지에서 내가 필요한 데이터만 가져와서 교체
    
    - 우리는 'React-Router-Dom' tkdyd

    1)설치 : npm install react-router-dom
    2) BrowserRouter import
    -사용자가 입력한 주소를 감지하는 역할
    3) Routes - Route
      3-1) Routes : 여러 경로(Route)를 감싸서,
                    하위 경로 중 조건에 맞는 경로 하나만 렌더링 해주는 역할
                    ex)
                      클라이언트 " 나A페이지 줘"
                      Routes : "ㅇㅋ A페이지 여기 있어(Route)"
                      클라이언트 " 나B페이지 줘"
                      Routes : "ㅇㅋ B페이지 여기 있어(Route)"
                    과거에는 Switch라는 문법의 이름으로 사용되었음
                    리액트가 업데이트 되어서 이름이 Routes로 변경된 것!

      3-2) Route : 경로
                    - 필수 속성이 2가지 (path, element)
                    - path (경로) : 사용자가 이렇게 요청을 했을 때 ~
                    - element (컴포넌트) : 이 컴포넌트를 보여주세요 ~
    */
    
  return (

    <div>
      <BrowserRouter>
        <h1 style={{ textAlign: "center" }}>
        <span style={{color:"red"}}>W</span>
        <span style={{color:"orange"}}>E</span>
        <span style={{color:"yellow"}}>L</span>
        <span style={{color:"green"}}>C</span>
        <span style={{color:"blue"}}>O</span>
        <span style={{color:"indigo"}}>M</span>
        <span style={{color:"purple"}}>E</span> to React Router!
        </h1>
        <hr />
        <MenuBar></MenuBar>
        {/* 필요한 페이지 가져다주는 애 */}
        <hr />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/notFount' element={<NotFound />}></Route>
          <Route path='/board' element={<Board />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
