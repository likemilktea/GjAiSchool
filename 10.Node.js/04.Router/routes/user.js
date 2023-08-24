// 라우터 작업, 페이징만 하는 라우터들만!
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send(`
    <h1>USER Page</h1>
    `)
})

module.exports = router ;