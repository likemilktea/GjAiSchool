import './App.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react'
import axios from 'axios'

function App() {

  /* Mission!

  1. axios를 통해서 받아온 데이터 중, 순위와 관련된 배열이 존재
  2. 그 배열을 movieList라는 state 배열에 세팅
    const [movieList, setMovieList] = useState([])
  3. movieList 배열에 map 함수를 이용해서 화면에 영화 순위를 기재
    순위 | 영화제목 | 개봉일자 |
    1    | 범죄도시 | 2020~~
  4. 디자인은 자유롭게
  
  */

  let movieUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230601';
  let movieInfo
  /* 화면에 영화 랭킹을 띄워주자! 
  - jQuery + aJax 방식
    => 리액트에서는 jQuery라이브러리를 사용할 필요가 없기 때문에
      이 방식이 효율X
  - fetch API
  - Axios

  Q. API를 언제 가져와줘야할까?
  A. 화면이 뜬 직후! (Mount) => useEffect
   왜? 화면이 어느 정도 뜨고 데이터 가져오는데 주춤하면 OK
   수초간 화면 자체가 안 뜨면 사용자 입장에서 불편하다고 느낌
  */

   useEffect(()=>{
    // getDataWithFetch()
    getDataWithAxios()
   },[])

  /* Case 1. fetch
  1) 장점
  - JS안에 내장되잉ㅆ는 라이브러리, 우리가 굳이 설치하거나 import할 필요가 없다.
  - 내장 라이브러리이기 때문에 업데이트에 영향을 받지 않는다.ㅣ

  2) 단점
  - 지원하지 않는 브라우저 존재 (IE11) => jQuery + aJax 조합이 흥했던 이유
  - json으로 변환해주는 과정이 필요하다.
  - axios에 비해 기능이 적다.
  */

  const getDataWithFetch = () => {
    console.log('getDataWithFetch');
    
    // fetch(movieUrl)
    //   .then(res => res.json())//fetch를 통해 받아온 데이터를 json 형태로 파싱
    //   .then(res => console.log(res))
    //   .catch(()=>{console.error('error!')})
    
    // Q. 만약 내가 프론트에서 백으로 보내줘야할 정보가 있다면?
    // => 방법만 알려주는 것, 지금 당장 필요X
    fetch(movieUrl,{
      id : 'seonzeti'
    })
      .then(res => res.json())//fetch를 통해 받아온 데이터를 json 형태로 파싱
      .then(res => console.log(res))
      .catch(()=>{console.error('error!')})
  }
  /* Case 2 axios
  1)장점
    - 기능이 많다.
    - 크로스 브라우징이 최적화 (다양한 브라우저 지원)
  2)단점
  - 설치가 필요하다
  - import가 필요하다
  - 무겁다

  **설치방법
  1) npm i axios
  2) import axios from 'axios'
  */
  const getDataWithAxios = () => {
    console.log('getDataWithAxios');
    axios(movieUrl)
    // .then(res => movieInfo = res.data.boxOfficeResult.dailyBoxOfficeList)
    .then(res => movieInfo = res)
    .then(res => console.log("data2 : ",res))
    console.log("data1 : ", movieInfo);

    // 만약 내가 데이터를 보내주고 싶으면?
    // 1. get방식으로 데이터를 보내주는 경우
    axios.get(movieUrl,{id:'seonzeti'})
    .then(res => console.log(res))

    // 2. post 방식? axios.post()
  }



  return (
    <div className="App">
      <h1>❤️6월의 영화 데이터❤️</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>순위</th>
            <th>제목</th>
            <th>개봉일자</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>{movieInfo[0].rank}</td>
            <td>{movieInfo[0].movieNm}</td>
            <td>{movieInfo[0].openDt}</td>
          </tr> */}
          <tr>
            <td>2</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;