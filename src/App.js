import React, { useState } from 'react';
import './App.css';


function App(){
    const [cal,setCal]=useState('');
    const [result,setResult]=useState('');
    const [show,setShow]=useState(false);

    function click(el){
        setCal(cal+el);
        setShow(false);
    }
    function calculation(){
        let op = ['*','+','/','-'];
        if(op.includes(cal[cal.length-1])){
            return;
        }else{
            if(cal===''){
                return;
            }else{
                try {
                    setResult(eval(cal));
                    setShow(true);
                }
                catch {
                    setResult('Math error');
                }
            }
        }
    }

    function blankSpace() {
        setCal('');
        setShow(false);
    }
    return(
      <div className='App'>
        <div className='main'>
            <div className='header'><h1>CALCULATOR</h1></div>
            <div className='casio'>
                <div className='row'>
                    <div id='container'>{show?result:cal}</div>
                    <button className='right'onClick={()=>blankSpace()}>C</button>
                </div>
                <div className='row'>
                    <button className='left' onClick={()=>click(1)}>1</button>
                    <button className='left' onClick={()=>click(2)}>2</button>
                    <button className='left' onClick={()=>click(3)}>3</button>
                    <button className='right'onClick={()=>click('/')}>/</button>
                </div>
                <div className='row'>
                    <button className='left'onClick={()=>click(4)}>4</button>
                    <button className='left'onClick={()=>click(5)}>5</button>
                    <button className='left'onClick={()=>click(6)}>6</button>
                    <button className='right'onClick={()=>click('-')}>-</button>
                </div>
                <div className='row'id='four'>
                    <button className='left'onClick={()=>click(7)}>7</button>
                    <button className='left'onClick={()=>click(8)}>8</button>
                    <button className='left'onClick={()=>click(9)}>9</button>
                    <button className='right'onClick={()=>click('+')}>+</button>
                </div>
                <div className='row'id='five'>
                    <button className='left'onClick={()=>click('.')}>.</button>
                    <button className='left'onClick={()=>click(0)}>0</button>
                    <button className='left'onClick={()=>calculation()}>=</button>
                    <button className='right'onClick={()=>click('*')}>*</button>
                </div>
            </div>
        </div>
      </div>
    );
}

export default App;
