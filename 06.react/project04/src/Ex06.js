import React from 'react'
import MenuBox from './components/Ex06MenuBox'

const Ex06 = () => {
    /* 푸딩 메뉴판을 제작해보자! */
    const divStyle = {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'Wrap'
    }
    const menuList = [
        {
            "name": "카라멜 커스터드 푸딩",
            "price": 4000,
            "content": "고려시대에 원나라에서 목화씨를 훔쳐온 문익점 선생님을 아시나요?",
            "imgSrc": "https://cdn.imweb.me/thumbnail/20230412/72ab39bf2c337.jpg",
            "baseColor" : "brown"

        }, {
            "name": "블루베리 푸딩",
            "price": 4300,
            "content": "라즈베리 블루베리가 여름을 맞이하여 다시 돌아왔습니다~",
            "imgSrc": "https://cdn.imweb.me/thumbnail/20230427/ff04ae058095e.jpg",
            "baseColor" : "purple"
        }, {
            "name": "라즈베리 푸딩",
            "price": 4300,
            "content": "라즈베리 블루베리가 여름을 맞이하여 다시 돌아왔습니다~",
            "imgSrc": "https://cdn.imweb.me/thumbnail/20230427/d2e739dd19f3c.jpg",
            "baseColor" : "red"
        }
    ]
    return (
        <div>
            <h1 style={{textAlign:"center"}}>메뉴판</h1>
            <div style={divStyle}> {menuList.map(item => <MenuBox list={item} key={item.name}></MenuBox>)}</div>
        </div>
    )
}

export default Ex06