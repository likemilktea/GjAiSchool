import './App.css';

function App() {
  // JSX 문법 규칙 4번째
  // JSX 문법에서 스타일 적용시! 객체 형태로 사용해야 한다!
  // JSX 규칙 ->
  // 1. return 안에 있는 태그가 2개 이상이라면 
  //    반드시 부모 태그가 있어야 한다.
  //    하나의 태그로 묶여 있어야 한다.
  // 2. {}를 사용해서 JS에 있는 값을 이용할 수 있다.(표현식)
  //    -->제어문은 사용할 수 없다. if, for etc...
  //    삼항연산자 or && 등을 이용
  // 3. class라는 키워드 대신에 className을 이용한다.
  // 4. 태그 안에 style을 사용해 줄 때에는 객체형식으로 사용해야 한다
  let toDay = new Date();
  let year = toDay.getFullYear();
  let month = toDay.getMonth()+1;
  let date = toDay.getDate();
  let season = "";

  switch(month){
    case 3 || 4 || 5:
      season="봄"
      break;
    case 6 || 7 || 8:
      season="여름"
      break;
    case 9 || 10 || 11:
      season="가을"
      break;
    case 12 || 1 || 2:
      season="겨울"
      break;
  }
  let name = prompt("이름을 입력해 주세요 : ");
  // let nameColor = prompt("글씨색깔 입력")
  // let bgColor = prompt("배경색깔 입력")
  // const style = {
  //   color : nameColor,
  //   backgroundColor : bgColor
  // };
  return (
    <div>
      <h1>{year}.{month}.{date}.</h1>
      <hr></hr>
      <p>{name}님 지금은 {season}입니다. 좋은 하루 되세요!</p> 
    </div>
  );
}

export default App;
