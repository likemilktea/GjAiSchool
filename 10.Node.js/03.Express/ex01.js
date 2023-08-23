/* 

** Express Framework 
- 이전까지의 처리 흐름은 한 파일에 너무 많은 코드가 들어가있었다.
- DB연결, 모듈설정, 라우팅.. 한 파일이 해야할 일이많아짐 
- 코드의 중복화가 심해짐, 유지보수 효율 Down 

- 더 적은 코드로 더 많은 일을 할 수 있도록 남이 만들어놓은 
    프레임워크를 가져다가 쓸거임 => express 

 - 분업화 진행 
  1) 사용자의 요청에 따른 기능을 정의 : Middleware 
  2) 사용자가 요청한 경로로 이동 : Router 
    (ex. 나 로그인 하고싶다! => Login Page )
  3) 응답하는 코드를 쉽고 다양하고
    동적으로 작성할 수 있게 해줌 : Template Engine
  
 - 기본 사용 방법 
  1) 원하는 폴더에 npm init -y 
    => package.json 파일이 생성 
    => 이 프로젝트에 대한 전반적인 사항들이 기록 

  2) 설치 npm i express 
    => node_modules 이라는 폴더 생성 
    => express 가 사용하는 많은 기능에 대한 모듈이 설치 

  3) 필요에 따라 폴더를 각각 생성 (선택)
   - config : DB, API 값 등 환경변수 저장 
   - public : 이미지, 비디오, 문서 등 정적인 페이지 
   - routes : 경로를 지정해주는 폴더 
   - views : 동적인 페이지 

   4) express의 메인 역할을 해주는 js 파일 
    - 보통 app.js 사용 
    - 리액트 App.js 와의 구분이 필요할 때는 server.js 
    - 수업 예제 ex01.js ... 
    - 이름은 자유 

*/

// 1. 설치한 express를 가져오는 코드
const express = require('express')

// 2. express를 실행시켜줄 준비
const app = express()

// 3. 라우팅에 따른 서버 열어주기
app.get('/',(req,res)=>{
    console.log('server start!');
})

// 4. 포트 번호 대기 (단, app.listen이 가장 하단에 존재)
app.listen(3333,()=>{
    console.log('3333포트에서 대기 중');
})