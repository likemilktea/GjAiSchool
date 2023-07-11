import React from 'react'
import NewsItem from './NewsItem'


const Main = ({ article }) => {

    // 1-2) session 저장소에서 데이터 가져오기
    let sessionData = sessionStorage.getItem('userId')
    console.log('session:', sessionData);

    return (
        <div>
            {sessionData == 'admin'
                ? <p>admin님 환영합니다</p>
                : <p>로그인이 필요합니다</p>
            }
            {article.map(item => <NewsItem key={item.url} obj={item} />)}
        </div>
    )
}

export default Main