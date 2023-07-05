import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
    /*
    ** Link 태그
    - 하이퍼 텍스트를 생성할 때는 보통 a태그를 사용ㅎㄴ다
    - 하지만 a태그는 클릭 시 새로운 페이지로 이동하기 때문에 
        SPA인 react와 성격에 맞지 않는다.

    1) import {Link} from 'react-router-dom'
    2) <Link to="경로">텍스트</Link>
    */
  return (
    <div>MainPage
    <hr/>
    <Link to='about'>about page로 이동</Link>
    {" "}
    <Link to="https://www.naver.com">네이버로 이동</Link>

    </div>
  )
}

export default MainPage