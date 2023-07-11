import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  // useRef => DOM 요소에 접근할 때 사용하는 리액트 훅
  // document.getElementBy 를 쓰고 싶다.

  // 1) import {useRef} from 'react'
  // 2) ref선언
  const idRef = useRef()
  const pwRef = useRef()
  // 3) 요소와 연결
  const nav = useNavigate()
  // <요소 ref={ref변수이름}>

  const handleLogin = (e) => {
    /** a, submit 같은 몇몇 태그들은 값을 넘기는 기능을 고유하게 가지고 있음
     * JS에서는 다른 페이지로 값을 넘기지 않게 하기 위해서 이벤트를 발생하지 않도록 막을 수 있다
    */
    e.preventDefault();
    console.log('handle Login Function', idRef.current.value,pwRef.current.value);

    if (idRef.current.value=='admin' && pwRef.current.value=="1234"){
      // sessionStorage
      // - 브라우저에 데이터를 저장할 수 있는 장소(storage)
      // - 페이지를 새로고침해도 데이터가 사라지지 않고 남아있다.
      // ex)로그인

      // localStorage
      // - 브라우저를 닫았다가 다시 열었을 때도 지속된다.
      // - 탭을 여러개 열어도 공유된다.
      // - 내가 직접 지우기 전까지는 지속됨

      // 1-1) session에 데이터 저장하기
      sessionStorage.setItem('userId',idRef.current.value)

      alert("환영합니다"+idRef.current.value+"님!")
      window.location.replace('/')
    }else{
      alert("잘못된 ID 혹은 PW입니다.")
      idRef.current.value=""
      pwRef.current.value=""
      idRef.current.focus()

    }
  }

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" ref={idRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login