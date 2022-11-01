import React, { useState } from 'react';
import './App.css';

function App() {
  const [value , setValue] = useState('');
  const onClickHandler = (e) => {
    setValue(value+e);
  }
  return (
    <div className="App">
      <div className="main">
        <h1>Calculator</h1>
        <div className="input">
            <div className="display">{value}</div>
            <div className="c">C</div>
        </div>
        <div className="num">
            <div onClick={()=>(onClickHandler(1))}>1</div>
            <div onClick={()=>(onClickHandler(2))}>2</div>
            <div onClick={()=>(onClickHandler(3))}>3</div>
            <div onClick={()=>(onClickHandler('/'))}>/</div>
            <div onClick={()=>(onClickHandler(4))}>4</div>
            <div onClick={()=>(onClickHandler(5))}>5</div>
            <div onClick={()=>(onClickHandler(6))}>6</div>
            <div onClick={()=>(onClickHandler('-'))}>-</div>
            <div onClick={()=>(onClickHandler(7))}>7</div>
            <div onClick={()=>(onClickHandler(8))}>8</div>
            <div onClick={()=>(onClickHandler(9))}>9</div>
            <div onClick={()=>(onClickHandler('+'))}>+</div>
            <div onClick={()=>(onClickHandler('.'))}>.</div>
            <div onClick={()=>(onClickHandler(0))}>0</div>
            <div >=</div>
            <div onClick={()=>(onClickHandler('*'))}>*</div>
        </div>
      </div>
    </div>
  );
}

export default App;
