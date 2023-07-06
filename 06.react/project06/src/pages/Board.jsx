import React from 'react'
import { Link } from 'react-router-dom'
import list from '../boardlist.json'


const Board = () => {
  let url = "/detail/"

  return (
    <div>
      <table border="1px solid black">
        <tbody>
          {list.boardList.map((item, idx) =>
            <tr key={item.num}>
              <td>{idx + 1}</td>
              <td>
                <Link to={url + item.num}>
                  {item.title}
                </Link>
              </td>
              <td>{item.writer}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Board