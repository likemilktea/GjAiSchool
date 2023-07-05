import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const nav = useNavigate()
    let auth = false;
    const goToMain = () => {
        console.log('go to main function');
        auth ? nav('/') : nav('/login')
    }
    /*
    만약 우리 유저라면 메인 페이지로 이동
    우리 유저가 아니라면 로그인 페이지로 이동

    useNavigate
    - 페이지 이동을 도와주는 리액트 훅

    1) import {useNavigate} from 'react-router-dom'
    2) const 변수 = useNavigate()
    3) 페이지 이동을 해야할 때, 변수("경로")
    ex) const nav = useNavigate()
        nav('/login')
     */
  return (
    <div>
        AboutPage
        <hr/>
        <button onClick={goToMain}>메인페이지(유저만 확인가능)</button>
    </div>
  )
}

export default AboutPage