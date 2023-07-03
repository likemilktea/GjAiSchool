import React, { useState } from 'react'
import picSrc from './img/pic02.jpg'
const Ex02 = () => {
    /* React에서 내부 이미지 경로 지정하는 방법
    1)src 폴더 내에 있는 이미지 사용하기 - import
    - import 이미지 변수 from '경로'
    -<img src={이미지변수}>

    2)public 폴더 내에 있는 이미지 사용하기
    */
    

    let allLike=99;
    const [like,setLike] = useState(0)
    const ck=()=>{
        if (like==1){setLike(0);}
        else{setLike(1)}
    }
    return (
        <div>
            <img width="300px" src='img/pic01.jpg'></img>
            <p>
                <span onClick={ck}>{like==1?"❤️":"🤍"}</span>{" "}
                <span style={{color:like==1?"red":"black"}}>좋아요 {like+allLike}개</span>
            </p>
        </div>
    )
}

export default Ex02