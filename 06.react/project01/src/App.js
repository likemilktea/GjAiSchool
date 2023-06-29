import './App.css';

function App() {
  /*
  JSX : 하나의 파일 안에 HTML문법과 JS문법을 동시에 작성할 수 있는 파일 확장자
      => JS에서 HTML문서로 접근할 때 별도로 document 객체에 접근X
      => 가독성이 좋고 기능별로 분류하기도 쉽다.
    ** JSX 규칙
    1. 여러 요소가 있다면 반드시 하나의 부모요소로 감싸주어야 한다.
      이 때, 감싸는 부모요소는 <div>가 아니더라도 상관없다
      비어있는 태그로도 가능<></>
    2. 표현식 사용 가능!
      HTML 태그 옆에 JS 문법을 사용하고 싶다면?
      =>return 문 안에, {} 중괄호 안에 작성
      단, {}내에 if 문은 사용할 수 있다.

      case 1) 조건이 하나일 때 : && 연산자
      - && 연산자는 양 옆이 모두 true일 때만 랜더링

      case 2) 조건이 두 개일 때 : 삼항연산자
      - 조건문 ? true일 때 실행문 : false일 때 실행문

      case 3) 조건이 세 개 이상일 때: if문 사용
      - 표현식으로는 사용이 불가하다
      - return문 위쪽에서 사용
    3. 기존 HTML 문법과 다른 점들 정리
      a. class 대신 className을 사용
      b. HTML태그를 사용할 때는 무조건 소문자를 사용
        ex) <h1> O <H1> X
        그 이유는> 대문자는 따로 쓸 일이 있음~
      c. content가 존재하지 않더라도 끝 태그를 생략할 수 없다
        다만, 줄여쓰는 건 가능
        ex) <input> X <input/> O
  */ 
  let name = '최영화';
  console.log('현재 방문한 사람 :',name);

  let state = 'open'

  let subName = '';
  if (name === '임명진'){
    subName = 'JS'
  }else if(name === '최영화'){
    subName = 'Python'
  }else if(name === '선영표'){
    subName = 'React'
  }
  return (
    <div className='App'>
      {/* 1. 조건이 하나일 때 */}
      {state === 'open' && 
      <div>송솔의 {subName} 홈페이지에 오신 것을 환영합니다.</div>
      }
      {/* 2. 조건이 두 개일 때 */}
      {name==='나예호'
      ?<div>죄송합니다. 이용하실 수 없습니다.</div>
      :<div>{name}님 환영합니다~</div>
      }
      
    </div>
  );
}

export default App;
