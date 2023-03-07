import React from 'react'

function ComponentB(props) {
    // const [count, setName] = props;
    console.log(props)
     const handle = () =>{

        props.setCount(props.count+10);
    }
  return (
    <div>
        <p>In component B, value is displaying</p>
      <h1>{props.count}</h1>
       <button className='inc' onClick={handle}>Increment</button> 
    </div>
  )
}

export default ComponentB;
