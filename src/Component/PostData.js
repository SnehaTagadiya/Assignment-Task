import React from 'react'
import './post.css';
import {useState} from 'react'
import axios from 'axios';

function PostData() {
    const [title, setTitle]=useState('');
    const[body, setBody]=useState('');

    function submitPost(e){
        e.preventDefault();
        const postData ={
            title,
            body,
        };
          console.log("new post added")
      axios.post('https://jsonplaceholder.typicode.com/posts',postData)
        .then((response)=>{
            console.log(response);
        });
      
    }
  return (
    <div>

    <div id="cover-caption">
        <div className="container">
            <div className="row text-white">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <h1 className="display-4 py-2 ">Post Data</h1>
                    <div className="px-2">
                        <form  className="justify-content-center" onSubmit={submitPost}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label >Body</label>
                                <input type="text" className="form-control" value={body} onChange={(e)=>setBody(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg" >Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PostData