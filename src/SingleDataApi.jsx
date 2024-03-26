//import React from 'react'
import axios from 'axios';
import React, { Fragment, useEffect,useState } from 'react'

const SingleDataApi = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
       axios
       .get("https://jsonplaceholder.typicode.com/posts/2")
       .then((result)=>{
         console.log(result.data);
         setPosts(result.data);
       })
       .catch((error) =>{
        console.log(error);

       });

     },[] );
  return (
    <Fragment>
        <h4>{posts.id}</h4>
        <h4>{posts.title}</h4>
        <h4>{posts.body}</h4>


    </Fragment>
  )
}

export default SingleDataApi