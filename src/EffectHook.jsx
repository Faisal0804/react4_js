import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'

const EffectHook = () => {
    const [count,setCount]=useState(0);

   useEffect(
    ()=>{
        console.log('The count is:', count);
  
         return () => {
          console.log('I am being cleaned up!');
         };
          
  
  
     },[count]
   );


  return (
    <Fragment>
       
        <div >
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={()=>setCount(count+1)}>
        Increment
      </button>
   
    </div>
        

    </Fragment>
  )
}

export default EffectHook