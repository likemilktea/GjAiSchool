import { useEffect } from "react"
import React,{useState} from 'react'

const Ex02 = () => {
    /* 랜덤게임을 만들어 보자!
    1) 필요한 state들을 관리 (ranNum, num, result, gameNum)
        => 이때 값들은 화면에 바로 변화되게 할 것
    2) 랜덤한 수를 뽑아주자 (1~3)
    3) 내가 누른 버튼의 숫자를 구해보자(이벤트 객체, 함수 매개변수 e)
    4) 2번 숫자와 3번 숫자를 비교(게임의 횟수에 따라서) 
    - 버튼을 클릭할 때마다 gameNum은 1씩 증가
    - gameNum이 변경될 때 2번 숫자와 3번 숫자의 값을 비교
    */
    const [inputNum, setInputNum] = useState()
    const [cpuNum, setCpuNum] = useState()
    const [gameNum, setGameNum] = useState(0)
    const [result, setResult] = useState()

    // 버튼을 클릭했을 때 실행될 함수
    const btnCk = (no) => {
        setInputNum(no)
        setCpuNum(parseInt(Math.random()*3)+1)
        setGameNum(gameNum+1)
        console.log(cpuNum,inputNum)
    }
    // gameNum state의 값이 변경될 때 마다 승부를 판단
    useEffect(()=>{
        if(inputNum!== undefined){
            if(cpuNum == inputNum){
                setResult("같습니다")
            }
            else{
                setResult("서로 다릅니다")
            }
        }
    },[gameNum])

  return (
    <div>
        <h1>랜덤 게임을 해보자!</h1>
        <button onClick={()=>{btnCk(1)}}>1</button>
        <button onClick={()=>{btnCk(2)}}>2</button>
        <button onClick={()=>{btnCk(3)}}>3</button>
 

        <div>
            <p>내가 입력한 숫자 : {inputNum}</p>
            <p>컴퓨터가 입력한 숫자 : {cpuNum}</p>
            <p>결과 : {result}</p>
            <p>Game Number : {gameNum}</p>
        </div>
    </div>
  )
}

export default Ex02