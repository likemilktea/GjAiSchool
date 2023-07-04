import React from 'react'
import { useState } from 'react';

const Ex07Child = ({changeData}) => {

    const [inputTxt, setInputTxt] = useState('');


    return (
        <div>
            <p>이곳은 하위 컴포넌트 입니다~{inputTxt}</p>
            <input type="text" 
            onChange={(e)=>{setInputTxt(e.target.value)}}
            ></input>
            <button onClick={()=>{changeData(inputTxt)}}>값 보내기!</button>
        </div>
    )
}

export default Ex07Child