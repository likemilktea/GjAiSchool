// 미들웨어 등록, 서버 생성
const express = require('express')
const app = express()
const indexRouter = require('./routes')
const userRouter = require('./routes/user')

// 기본 라우터
app.use('/',indexRouter)

// 유저와 관련된 라우터들은 따로 모아보자!
app.use('/user',userRouter)

app.set('port',process.env.PORT || 3333);
app.listen(app.get('port'))