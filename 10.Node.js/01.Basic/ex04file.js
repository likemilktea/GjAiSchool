const http = require('http');
const fs = require('fs').promises;

http
.createServer(async(req,res)=>{
    console.log('누군가가 서버에 접속했습니다.');
    const htmlFile = await fs.readFile('./ex04.html')
    res.write(htmlFile);
    res.end();
})
.listen(3333,()=>{
    console.log('3333번 포트에서 대기 중 ...');
})