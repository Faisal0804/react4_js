import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import BeforeImage from "./assets/images/Infinity Laravel.png"
import AfterImage from "./assets/images/Infinity Mern.png"

const ImagesHook = () => {
    const [image,setImage]=useState(BeforeImage);

    const onChange=()=>{
        setImage(
            AfterImage
        );
    };

      

  return (
    <div>

        <img style={{height:"200px",width:"200px"}} src={image} alt="" />
        <Button onClick={onChange}>Click Me</Button>
    </div>
  )
}

export default ImagesHook