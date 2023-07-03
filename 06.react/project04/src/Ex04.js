import React from 'react'

const Ex04 = () => {
    // map 함수와 filter 함수를 마스터 해보자~
    // JS최신 문법의 개념

    // Map함수
    let list = ['나예호','임승환','손동연'];
    const newList = list.map(item=>{
        return <button>{item}</button>
    });
    console.log(newList)
    /* 
    map 함수의 원래 형태
    [1]생략 전
    -const 새로운 배열 이름 = 배열이름.map((배열의 요소, 인덱스)=>{
        return 리턴데이터
    })
    [2] 실행문 단축
    배열이름.map((배열의요소,인덱스)=>리턴데이터)
    [3] 파라미터 단축
    배열이름.map(배열의요소=>리턴데이터)
    **'람다식'
    */

    const scoreList =[
        {name:'최진수',score:100},
        {name:'최효정',score:90},
        {name:'정희석',score:50}
    ]
                
    const toHalfList=scoreList.map(item=>{
        return{
            // 스프레드 문법 : 기존 객체의 값 중에 변화가 없는 나머지 속성은
                                // 그대로 유지해 준다
            ...item,
            score : item.score/2
        }
    })
    console.log(toHalfList);
    return (
        <div>
            {newList}
        </div>
    )
}

export default Ex04