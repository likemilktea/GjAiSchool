import React from 'react'
import MemberCard from './components/Ex05MemberCard'

const Ex05 = () => {

    /* Map 함수
    - 주어진 함수를 호출한 결과를 모아서 새로운 배열을 생성한다.
    - map 함수를 이용하려면 key값을 꼭! 작성해주어야 한다!
    - 이 때, 키값은 서로 중복되면 안 된다.
    */

    let name = [
        {
            name: '임나연',
            age: 27,
            gender: '여성'
        },
        {
            name: '차은우',
            age: 25,
            gender: '남성'
        }

    ];
    let nameList = name.map(item => <button key={item.name}>{item.name}</button>);
    console.log(nameList);
    return (
        <div>
            <h1>회원 카드</h1>
            {nameList}

            {/* case1. 맵함수를 이용하지 않은 경우 */}
            {/* <MemberCard name={name[0]}/>
            <MemberCard name={name[1]}/>
            <MemberCard name={name[2]}/> */}

            {/* case2. 맵함수를 이용하는 경우 */}
            {name.map(item => <MemberCard list={item} key={item.name}></MemberCard>)}
        </div>
    )
}

export default Ex05