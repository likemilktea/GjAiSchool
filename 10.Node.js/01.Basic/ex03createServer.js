console.log('3. createServer');

// 현재 파일을 서버로 만들어주는 모듈 http 모듈이 필요함
// 1. 서버를 생성해주는 메서드 : createServer(콜백함수)
// 2. 연결 요청을 대기하는 메서드 : listen(port번호,콜백함수) 가장 하단에 있어야 함

// 내 아이피 주소 192.168.70.218
const http = require('http')
const ip = require('ip')
const requestIp = require('request-ip')

http.createServer((req, res) => {
    const ip_c = ip.address()
    const ip_req = requestIp.getClientIp(req).substring(7)
    console.log('서버에 누군가가 접근했습니다!', ip_req);

    if (ip_req === '192.168.70.46') {
        res.writeHead(200, { "Content-Type": 'text/html; charset=utf-8' })
        res.write('<h1>선생님 어서오세요~</h1>');
    }
    else {
        res.writeHead(200, { "Content-Type": 'text/html; charset=utf-8' })
        res.write('<h1>반가워요~</h1>');
    }
    res.end();

})
    .listen(3333, () => {
        console.log('3333번 포트에서 연결 대기 중');
    })