import React from 'react'

const Ex05MemberCard = ({list}) => {

    const cardStyle = {
        border : '3px solid pink',
        margin : '10px',
        padding : '10px'
    }
  return (
    <div style={cardStyle}>
        <h3>{list.name}</h3>
        <p>나이 : {list.age}세 / {list.gender}</p>

    </div>
    
  )
}

export default Ex05MemberCard