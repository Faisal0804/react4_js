import axios from 'axios';
import React, { Fragment, useEffect,useState } from 'react'

const AxoisApi = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
       axios
       .get("https://jsonplaceholder.typicode.com/posts")
       .then((result)=>{
        // console.log(result.data);
         setPosts(result.data);
       })
       .catch((error) =>{
        console.log(error);

       });

     },[] );

  return (

    <Fragment>
        <div>
            {posts.map((data)=>{
                return(
                    <div key={data.id}>
                        <h4>Title:{data.title}</h4>
                        <p>UserId:{data.userId}</p>
                        <p>Body:{data.body}</p>


                    </div>
                );
            })

            }



        </div>
        
    </Fragment>


  )
}

export default AxoisApi