import React, { useState } from 'react';
import "./Counter.css";

function Counter() {
    const [count,setCount] = useState(1);
    const [color,setColor] = useState("yellow");

    const Change = ()=>{
        setCount(count+1)
     }

    const changeColor = () =>{
        let gr = "rgb(61, 204, 116)"
       setColor(gr);
    } 
    
  return (
    <>
    <div className='square'>
        <div className='circle' style={{background:color}}>
          <h1 className='count'>{count}</h1>
      <button className='click' style={{background:color}} onClick={Change}>Click to increase counter</button>
      </div>
      </div>

      <button className='changeColor' onClick={changeColor}>Change Color</button>
      </>
    
  )
}

export default Counter;
