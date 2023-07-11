import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {

  const [aut, setAut] = useState('')
  const nav = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem('userId') != null) {
      // 로그인 되어 있는 상태
      setAut("Logout")
    } else {
      // 로그인 되어 있지 않은 상태
      setAut("Login")
    }
  })

  const handleLogout = () => {
    console.log('login/logout function', sessionStorage.getItem('userId'));

    if (sessionStorage.getItem('userId') != null) {
      // 로그인 되어 있는 상태
      // 1. 세션을 삭제
      // 1-1) 하나만 삭제
      sessionStorage.removeItem('userId')
      // 1-2) 세션 자체를 비워주는 것 sessionStorage.clear()
      // 2. 새로고침 메인으로 이동
      window.location.replace('/')
      
    } else {
      // 로그인 되어 있지 않은 상태
      nav('/login')
    }




  }
  return (
    <div>
      <Link to='/'>Main</Link>
      {" "}|{" "}
      <Link to='/talk'>Talk</Link>
      {" "}|{" "}
      {/* 만약 로그인 상태라면 로그아웃 버튼
      로그아웃 상태라면 로그인 버튼 */}

      <span onClick={handleLogout}>{aut}</span>

    </div>
  )
}

export default Header