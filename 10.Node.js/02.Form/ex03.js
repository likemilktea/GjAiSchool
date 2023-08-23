// 구구단 실습
const http = require('http')
const u_url = require('url')

http
.createServer((req,res)=>{
    console.log('서버에 누군가가 접근했습니다!',req.url);

    let query = u_url.parse(req.url,true).query
    console.log(query);

    res.writeHead(200, {"Content-Type": 'text/html; charset=utf-8'})
    const num1 = parseInt(query.num1)

    res.write(`<table  border="1">`)

    for (let i = 1; i < 10; i++) {
        res.write(`<tr><td>${num1}*${i}=${num1*i}</tr></td>`)
    }

    res.write(`</table>`)
    res.end()
})
.listen(3333,()=>{
    console.log('3333포트에서 대기 중입니다');
})