/* Router 작업 */
const express = require('express')
const router = express.Router()
const path = require('path')



// 로그인 메인창 (로그인 창을 띄워주는 역할)
router.get('/',(req,res)=>{
    console.log('서버 접근');
    res.sendFile(path.join(__dirname, '..', 'public', 'ex02login.html'))
})

// get방식의 데이터를 받아오는 공간
// express를 통한 get방식 데이터를 가져오는 방법 요청.query
router.get('/getLogin',(req,res)=>{
    console.log('express - get',req.query);
})

// post방식의 데이터를 받아오는 공간
// express를 통한 post방식 데이터를 가져오는 방법 : 요청.body
// body-parser라는 모듈 필요
// 1. 설치 : npm i body-parser
// 2. import
// 3. 미들웨어 등록
router.post('/postLogin',(req,res)=>{
    console.log('express - post',req.body);
    /* 만약에 아이디가 admin, 비밀번호 1234라면 
        => success 화면을 켜줌 
        그렇지 않다면 failed 화면을 켜줄 것 
    */
   if (req.body.id === 'admin' && req.body.pw === '1234'){
    // res.sendFile(__dirname+'../public/ex02success.html')
    res.sendFile(path.join(__dirname, '..', '/public/ex02success.html'))
   } else {
    res.sendFile(path.join(__dirname, '..', '/public/ex02failed.html'))
   }
})

module.exports = router;