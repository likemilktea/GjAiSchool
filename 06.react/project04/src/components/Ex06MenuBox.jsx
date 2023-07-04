import React from 'react'

const Ex06MenuBox = ({list}) => {
    const divStyle={
        width : "300px",
        
        margin : '10px',
        padding : '10px',
        backgroundColor : list.baseColor,
        borderRadius: "10px"
    }
    const imgStyle={
        width : "300px",
        borderRadius: "10px"
    }
    const line={
    }
  return (
    <div style={divStyle}>
        <img style={imgStyle} src={list.imgSrc}></img>
        <p style={line}>{list.name}</p>
        <p style={line}>{list.price}</p>
        <p style={line}>{list.content}</p>
    </div>
  )
}

export default Ex06MenuBox