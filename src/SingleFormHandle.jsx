import React, { useState } from 'react'

const SingleFormHandle = () => {
     const [data,setData]=useState('');

     const hadleChange=(event)=>{
        setData(event.target.value);
     };
  return (
    <div>
        <form action="" >

           name: <input type="text" value={data} onChange={hadleChange}/>
           <p>Input Value: {data}</p>
        </form>
    </div>
  )
}

export default SingleFormHandle