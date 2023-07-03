import React, {useState} from 'react'

const Ex01 = () => {
    /* React Event
        1. onClick ={함수이름}
            이 때, 선언되어있는 함수가 아니라면 바로 호출
            onClick={ck} (O)
            onClick={()=>{}} (O)
    */
    /* State 
    - 변수는 값이 변한다고 해서 화면이 다시 렌더링되지는 않는다.
        만약 화면에 변수를 바뀐 값으로 띄워주려면 바뀔 때마다 재 렌더링을
        해줘야함
    - state는 컴포넌트 내부에서 관리되는 변경이 가능한 데이터,
        값이 바뀔 때마다 화면이 재 렌더링이 되어서 반응이 빠름
    */

    let num = 0;

    const ck = ()=>{
        console.log('ck');
        num++;
        console.log('현재 num :',num);
    }
    // state로 값 변경해보기!
    // const [변수이름, set변수이름] = useState(초기값)
    // 내가 만약 state의 갑ㅄ을 변경하고 싶다면 set 변수이름 함수를 호출
    
    // 예) 내가 화면에 바로 갱신되sms num2를 3으로 변경하고 싶다면
        // setNum(3)
    const[num2,setNum2] = useState(0)
    const ck2 = () =>{
        setNum2(num2+1);
    }
    const ck3 = () =>{
        setNum2(num2-1);
    }
    // ** 간단한 예제! -1이 적힌 버튼을 개재해서 state 옆의 숫자를 하나씩 감소


    return (
    <div>
        <p>변수 : {num}</p>
        <p>state : {num2}</p>
        <button onClick={ck}>+1</button>
        <button onClick={ck2}>+1</button>
        <button onClick={ck3}>-1</button>
    </div>
  )
}

export default Ex01