import React, { useState } from 'react'

const NameSingleFormHandle = () => {
    const [data,setData]=useState('');

    const dipto = {
            main: {
              backgroundColor: "red",
              
            
            },
         input:{
            color:"blue",
         }

          };
        
    const handleChange = (e) => {
   
                setData(e.target.name);
                setData(e.target.value);              
              
               
               };

        const onSubmit = (e) => {
                    e.preventDefault();
                    alert(data)
                   
                
                    // form
                   };
            
      


        
  return (
    <div>


<form action="" onSubmit={onSubmit}>

name: <input 
       type="text"
       name="data"
       onChange={handleChange }/>
       <p  style={dipto.input}>Input Value: {data}</p>
       <button type="submit">Submit</button>

</form>
    </div>
  )
}

export default NameSingleFormHandle