import React from 'react';
import ComponentB from "./ComponentB";
import { useState } from 'react';
import "./Comp.css"

function ComponentA() {
  const [cendol, setCendol] = useState(2)
  return (
    <div id='value'>
      
      <ComponentB count={cendol} setCount={setCendol}/>
    </div>
  )
}

export default ComponentA;
