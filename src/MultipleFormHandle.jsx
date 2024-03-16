import React, { useState } from 'react'

const MultipleFormHandle = () => {
   const [data,setData]=useState({
    username:'',
    email:''
   });
   const handleChange=(event)=>{
          const name = event.target.name;
          const value = event.target.value;
         setData({
            ...data,[name]:value
         })
   } ;
       const handleSubmit = (event) => {
          event.preventDefault();
         alert(data.username);
        };
    


  return (
    <div>

        <form action='' method='post' enctype="multipart/form-data" onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
         
          onChange={handleChange}
        />
        </label>
        <label>Enter your email:
          <input 
            type="text" 
            name="email" 
            
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
        </form>
    </div>
  )
}

export default MultipleFormHandle