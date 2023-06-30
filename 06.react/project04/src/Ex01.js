import React from 'react'

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
    return (

    <div>
        <p>{num}</p>
        <button onClick={ck}>+1</button>
    </div>
  )
}

export default Ex01