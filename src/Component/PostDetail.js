import React,{useState, useEffect} from 'react'
import axios from 'axios'


function PostDetail() {
    const [data, setData]=useState([]);

    useEffect(()=>{
        showData()
    },[]);

    const showData = () => {
       axios.get('https://jsonplaceholder.typicode.com/posts/1')
       .then((response) => {
        console.log(response);
        setData(response.data);
      });
    
    };
    
  return (
    <div>
        <h1>Post Details</h1>
        <table border="3" className='table'>
            <thead className='thead-dark'>
                <tr>

                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>

            <tbody>
                {
               data.map((user,i)=>(
                   <tr key={i}>
                       <td>{user.id}</td>
                       <td>{user.title}</td>
                       <td>{user.body}</td>
                   </tr>
               ))
               }
            </tbody>
        </table>

    </div>
  )
}

export default PostDetail