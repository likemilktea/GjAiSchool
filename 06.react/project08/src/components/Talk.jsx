import React from 'react'
import { useState,useRef } from 'react'

const Talk = () => {
  
  const inputName = useRef()
  const inputCont = useRef()

  const [cont,setCont] = useState(
    [{name:'김도운',cont:'이게 나라냐'},
    {name:'송솔',cont:'이게 기사냐'}
    ]
  )
  const clickEvent = () => {
    setCont([...cont,{name:inputName.current.value,cont:inputCont.current.value}])
    console.log(inputName.current.value,inputCont);
    console.log(cont);
  }
  return (
    <div>
      <h3>톡톡!</h3>
      <span>기사에 대한 의견을 자유롭게 남겨주세요~</span>
      <div>
        {cont.map(item => <p>{item.cont} | 작성자 :{item.name} </p>)}
      </div>
      <hr/>
      작성자 : <input type='text' ref={inputName}/>
      
      <br/>
      <span>내용</span>
      
      <br/>
      <textarea col='40' rows='4' ref={inputCont}></textarea>
      <br/>
      <button onClick={clickEvent}>댓글작성</button>
    </div>
  )
}

export default Talk