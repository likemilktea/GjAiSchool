const http = require('http')
const u_url = require('url')

http
.createServer((req,res)=>{
    console.log('서버에 누군가가 접근했습니다!',req.url);
    // front에서 back으로 넘겨준 정보는 client가 보낸 것이라서
    // request (첫번째 인자) 안에 존재함 

    // 첫번째 인자 req : 요청에 관한 정보들, 클라이언트가 주는 정보들
    // 두번째 인자 res : 응답에 관한 정보들, 서버가 제공할 정보들 
    // ex) 사용자의 url을 알고싶어 => req.url()
    //      사용자에게 내가 안녕?이라는 페이지를 보여주고싶어 => res.write() 

    // url 안에 있는 쿼리스트링을 추출해서 객체로 변환해주는 코드
    let query = u_url.parse(req.url,true).query
    console.log(query);

    res.writeHead(200, {"Content-Type": 'text/html; charset=utf-8'})
    res.end(`${query.userName}님, 당신의 mbti는 ${query.userMbti}이군요! `)
})
.listen(3333)