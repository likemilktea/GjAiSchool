import React from 'react'

const MemberBox = ({name,gender,likeSong,likeColor}) => {
    /*
    상위 컴포넌트에서 보낸 갑슬 하위 컴포넌트에서 받는 방법
    함수의 형태이기 때문에, 값은 함수의 매개변수를 통해서 받는다.

    Case1. (props)=>{ ~ props.name ~ }
    Case2. 객체 비구조화 할당
    - 객체 안에 속성만 꺼내서, 마치 변수인 것처럼 사용
    */

    // let person = {
    //     name : '송솔',
    //     gender : 'M'
    // }
    // let {name,gender} ={
    //     name : '송솔',
    //     gender : 'M'
    // }
    // console.log(name,gender);
  return (
    <div>
        <hr></hr>
        <div style={{color:likeColor}}>팀원 : {name} 성별 : {gender} 좋아하는 노래 : {likeSong}</div>
        <hr></hr>
    </div>
  )
}

export default MemberBox