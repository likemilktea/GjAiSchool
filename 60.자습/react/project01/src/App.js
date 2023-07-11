import './App.css';
import React, { useState, useRef } from 'react'


function App() {

  const [redSetting, setRedSetting] = useState('circle red');
  const changeBlackToRed = () => {
    setRedSetting(`circle red`);
    setYellowSetting(`circle black`);
    setGreenSetting(`circle black`);
  };
  const [yellowSetting, setYellowSetting] = useState('circle yellow');
  const changeBlackToYellow = () => {
    setRedSetting(`circle black`);
    setYellowSetting(`circle yellow`);
    setGreenSetting(`circle black`);
  };
  const [greenSetting, setGreenSetting] = useState('circle green');
  const changeBlackToGreen = () => {
    setRedSetting(`circle black`);
    setYellowSetting(`circle black`);
    setGreenSetting(`circle green`);
  };
  const changeAllBlack = () => {
    setRedSetting(`circle black`);
    setYellowSetting(`circle black`);
    setGreenSetting(`circle black`);
  };
  let now = false;
  setInterval(function() {
    if(now){
      changeBlackToRed();
      now=false;
    }else{
      changeAllBlack();
      now=true;
    }
  }, 1000);

  return (
    <div>
      <div className='rectangle'>
        <div id='red' className={redSetting} ></div>
        <div id='yellow' className={yellowSetting} style={{"marginLeft":"20px"}}></div>
        <div id='green' className={greenSetting} style={{"marginLeft":"20px"}}></div>
      </div>
      <div>
        <button onClick={changeBlackToRed}>Set Red{console.log('color:red')}</button>
        <button onClick={changeBlackToYellow}>Set Yellow{console.log('color:yellow')}</button>
        <button onClick={changeBlackToGreen}>Set Green{console.log('color:green')}</button>
        <button onClick={changeAllBlack}>Set Black{console.log('color:black')}</button>
      </div>

    </div>
  );
}

export default App;
