import React, { useState } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

export default function ParentComponent() {
    const[age,setAge]=useState(25)
    const[salary,setSalary]=useState(50000)

    const incrementAge=()=>{
        setAge(age+1)
    }
    const incrementSalary=()=>{
        setSalary(salary+1000)
    }
  return (
    <div>
        <Title/>
        <Count text="age"count={age}/>
        <Button handleClick={incrementAge}>incrementAge</Button>
        <Count text="salary"count={salary}/>
        <Button handleClick={incrementSalary}>incrementSalary</Button>
    </div>
  )
}
