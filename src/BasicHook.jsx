import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const BasicHook = () => {
    const [name,setName]=useState({
        country:"Bangladesh"

    });
    const onChange=()=>{
         setName({
            country:"Canada"
         })
        

    }
  return (
    <div>
        <h1>{name.country}</h1>
        <Button variant='primary' onClick={onChange}>click Me</Button>
    </div>
  )
}

export default BasicHook