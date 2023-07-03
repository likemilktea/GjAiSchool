import React, { useState } from 'react'

let randNum = parseInt(Math.random() * 3)
const select = ['좌', '정면', '우']
const Ex03 = () => {
    const [myPic,setMyPic] = useState('준비')
    const [cpuPic,setCpuPic] = useState('준비!')

    const btnCk = (e) => {
        
        setMyPic(e.target.innerText)
        setCpuPic(select[randNum])
        randNum = parseInt(Math.random() * 3) 
        console.log(randNum);       
    }
    return (
        <div>
            <h1>참참참 게임을 해보자!</h1>
            <button onClick={btnCk}>좌</button>
            <button onClick={btnCk}>정면</button>
            <button onClick={btnCk}>우</button>
            

            <p>나의 선택! : {myPic}</p>
            <p>컴퓨터의 선택! : {cpuPic}</p>
            <p>승패 : {myPic==cpuPic?"나의 승리":"컴퓨터의 승리"}</p>
            {/* 결과 비교: 나의 선택과 컴퓨터의 선택이 같으면 나의 승리
                        두 선택이 다르면 나의 패배
                        단, 결과 비교는 무조건 return문 안에서 진행
        */}

        </div>
    )
}

export default Ex03