const http = require('http')
const u_url = require('url')

http
.createServer((req,res)=>{
    console.log('서버에 누군가가 접근했습니다!',req.url);

    let query = u_url.parse(req.url,true).query
    console.log(query);

    res.writeHead(200, {"Content-Type": 'text/html; charset=utf-8'})
    const num1 = parseInt(query.num1)
    const operator = query.operator
    const num2 = parseInt(query.num2)
    let result = 0;
    switch (operator){
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
        case '*':
            result = num1*num2;
            break;
        default:
            result = num1/num2;
            break;
        
    }
    res.end(`${num1} ${operator} ${num2}은(는) ${result}이군요! `)
})
.listen(3333)