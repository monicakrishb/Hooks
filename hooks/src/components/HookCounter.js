import React, { useState } from 'react'

function HookCounter() {
    // setCount-->is a method that updates a state variable
    const[count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count{count}</button>
    </div>
  )
}

export default HookCounter
