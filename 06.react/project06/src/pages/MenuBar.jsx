import React from 'react'
import { Link } from 'react-router-dom';

const MenuBar = () => {
    const linkStyle = {
        "text-decoration": "none"
    }
    const divStyle = {
        'display' : 'flex',
        'justifyContent' : 'center'
        
    }
    const buttonStyle ={
        'margin':'2px'
    }
  return (
    <div style={divStyle}>
        <button style={buttonStyle}><Link style={linkStyle} to="/">Main</Link></button>
        <button style={buttonStyle}><Link style={linkStyle} to="/about">About</Link></button>
        <button style={buttonStyle}><Link style={linkStyle} to="/login">Login</Link></button>
        <button style={buttonStyle}><Link style={linkStyle} to="/notFount">NotFound</Link></button>
        <button style={buttonStyle}><Link style={linkStyle} to="/board">Board</Link></button>
        <button style={buttonStyle}><Link style={linkStyle} to="/detail">Detail</Link></button>

    </div>
  )
}

export default MenuBar