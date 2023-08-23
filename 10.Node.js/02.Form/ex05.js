const http = require('http')

/*post 방식으로 요청이 왔을 때 처리하는 방식
=> body 안에 존재
*/
const qs = require('querystring')

http
.createServer((req,res)=>{
    console.log('서버에 누군가가 접근했습니다!');
    let body = ""
    // 1) 사용자가 입력한 값을 누적시켜줄 공간
    req.on('data',(data)=>{
        body += data;
        console.log("1) body",body);
    })
    // 2) 사용자가 입력한 데이터의 수신 및 누적이 끝나면 데이터를 출력
    req.on('end',()=>{
        let post = qs.parse(body)
        console.log('2) post :',post); 
        
        res.writeHead(200, {"Content-Type": 'text/html; charset=utf-8'})
        res.write(`안녕하세요<br/>
                    저는${post.name}이구요<br/>
                    제 취미는 ${post.hobby}입니다.<br/>
                    저의 mbti는 ${post.mbti}입니다.<br/>
                    제가 하고 싶은 말은 ${post.talk}
                    `)
        res.end()
    })


   
})
.listen(3333,()=>{
    console.log('3333포트에서 대기 중입니다');
})