
import React from 'react'
import { Badge, Button } from 'react-bootstrap';

const functionComp = (props) => {
  function dothis(){
    alert("hello");
  }
    
  return (
   
   <div>
     <button onClick={dothis}>Click </button>
     <Button>click</Button>
     <Badge bg="secondary"> hello</Badge>

   </div>
    
  )
}

export default functionComp