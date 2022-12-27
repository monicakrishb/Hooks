import React,{useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const[display,setDisplay]=useState(true)
  return (
    <div>
      {/* Toggle-->this will effectively unmount the component from dom */}
        <button onClick={()=>setDisplay(!display)} >Toggle display</button>
        {/* if it is true it render the hook mask component */}
        {display && <HookMouse/>}

    </div>
  )
}

export default MouseContainer