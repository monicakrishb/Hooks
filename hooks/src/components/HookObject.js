import React, { useState } from 'react'

function HookObject() {
    const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <form>
<input type="text" value={name.firstName} onChange={e=>setName({firstName:e.target.value})}></input>
<input type="text" value={name.lastName} onChange={e=>setName({lastName:e.target.value})}></input>

<h2>Your firstName is-{name.firstName}</h2>
<h2>Your lastName is-{name.lastName}</h2>
<h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookObject