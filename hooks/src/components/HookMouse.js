import React,{useState,useEffect} from 'react'

function HookMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const logMousePosition=e=>{
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition)
// here we remove the event listener to clean up(with cleanup)
        return()=>{
          console.log('component unmounting code');
          window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
        Hooks X-{x}  Y-{y}  
    </div>
  )
}

export default HookMouse