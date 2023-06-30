//rafce
import React from 'react'

const MenuItem = (props) => {
    console.log('props : ',props);
  return (
    <div>
        <hr></hr>
        <p>{props.name}</p>
        <p>{props.menu}</p>
        <p>{props.price}</p>
        <hr></hr>
    </div>
  )
}

export default MenuItem