import './App.css';
import React from 'react';
import MemberBox from './component/MemberBox';

const AppExample = () => {
    

    /*
    여러분의 팀원을 소개해주세요!!

    이름 :
    성별 :
    좋아하는 노래 :

    - 단, Component와 Props의 개념을 이용할 것
    - component 폴더에 MemberBox라는 컴포넌트를 생성하기
    - 혹시 너무 빨리 끝내버린 친구들은 디자인 하고 있기!
    */
  return (
    <div className='container'>
        <MemberBox name='송솔' gender='남' likeSong='BTS - 다이너마이트' likeColor='purple'></MemberBox>
        <MemberBox name='송민아' gender='여' likeSong='조이 -안녕 ' likeColor='yellow'></MemberBox>
        <MemberBox name='최병민' gender='남' likeSong='like crazy -지민' likeColor='#81c147'></MemberBox>
        <MemberBox name='김도운' gender='남' likeSong='10cm 부동의첫사랑' likeColor='green'></MemberBox>
        <MemberBox name='강유빈' gender='여' likeSong='Ciki-사이' likeColor='ivory'></MemberBox>
    </div>
  )
}

export default AppExample