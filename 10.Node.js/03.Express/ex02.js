const express = require('express')
const app = express()
const indexRouter = require('./routes')

// 클라이언트의 post request data를 추출해주는 모듈
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}))

app.set('port',process.env.PORT || 3333)
app.use(express.static(__dirname+'/public'))

// router 미들웨어
app.use('/',indexRouter)

app.listen(app.get('port'))