import React from 'react'
import { Link } from 'react-router-dom'
const NewsItem = ({ obj }) => {
  return (
    <div className='article-container'>
      <img width="200px" src={obj.urlToImage}></img>
      <Link to={obj.url}>
        <h3>{obj.title}</h3>
      </Link>
      <p>{obj.description}</p>
    </div>
  )
}

export default NewsItem