import React, { useState } from 'react'
import Child from './components/Ex07Child'

const Ex07 = () => {
    const [data, setData]= useState(0);
    // 금고역할
    // 자식 컴포넌트가 부모 컴포넌트로 직접 데이터를 줄 수 없으니
    // 자식이 와서 데이터를 두고 갈 수 있을만한 공간을 만들어 두는것!!

    const changeData = (txt) =>{
        setData(txt);
    }
  return (
    <div>
        <h3>상위 컴포넌트</h3>
        <p>{data}</p>
        <hr/>
        <Child changeData={changeData}/>
    </div>
  )
}

export default Ex07