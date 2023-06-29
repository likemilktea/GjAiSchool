import logo from './logo.svg';
import './App.css';
import Ex02 from './component/Ex02';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ex02></Ex02>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// app 컴포넌트를 내보내겠습니다.
export default App;
