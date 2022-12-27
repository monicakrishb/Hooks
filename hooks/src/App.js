import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookMouse from './components/HookMouse';
import HookObject from './components/HookObject';
import MouseContainer from './components/MouseContainer';
import UseEffect from './components/useEffect';
import UseEffectrender from './UseEffectrender';
import Render from './components/Render';
import Renderhover from './Renderhover';
import Renderone from './Renderone';
import Rendertwo from './Rendertwo';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
   {/* <ClassCounter/> */}
   {/* <HookCounter/> */}
   {/* <HookCounter2/> */}
   {/* <HookObject/>  */}
   {/* <UseEffect/> */}
   {/* <UseEffectrender/> */}
   {/* <HookMouse/> */}
   {/* <MouseContainer/> */}
   {/* <Render/>
   <Renderhover/>
   <Renderone render={(isLoggedIn)=>isLoggedIn?"sindhu":'Guest'}/> */}
   {/* <Rendertwo 
   render={(count,incrementCount)=>(
   <Render count={count} incrementCount={incrementCount}/>
  )}
  />
  <Rendertwo 
  render={(count,incrementCount)=>(
  <Renderhover count={count} incrementCount={incrementCount}/>
 )}
  /> */}
  <ParentComponent/>
  </div>
  )}


export default App
