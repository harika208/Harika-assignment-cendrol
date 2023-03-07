import React from 'react'
import { useState } from 'react'
import "./Boolean.css"

function BB() {
    const [state,setState]=useState(1);
    const handleFirst=()=>{
        setState(!state)
    }
  return (
    <div className='boolean'>
      
      Output:{state && true ?<button className='red' onClick={handleFirst}>Boolean</button>:<button className='blue' onClick={handleFirst}>Boolean</button>}
    </div>
  )
}

export default BB
