import React, { useState} from 'react'
import "./CreatePost.css"

export default function CreatePost() {

  const [title, setTitle] = useState('');
  const [textBox, setTextBox] = useState('');
  const [userName, setUserName] = useState('');

  const submitPost = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:3003/CreatePost', {
        method: 'POST', headers: {"content-Type": 'application/json'}, body: JSON.stringify({title: title, postText: textBox, userName: userName})
      });
      const json = await response.json();
      console.log(json);
    }catch(e){
      console.log(e);
    }
    
    }
    

  return (
    <div className="create-post-container">
      <span className="post-title">Create Post
      <div className='post-username'>
        <input
                className="form-control "
                type="text"
                name="name" onChange={(e)=>{
                  setUserName(e.target.value);
                }}
                placeholder="username"
                required
                />
      </div>

      </span>
      <div className="form">
        <form onSubmit={submitPost}>
          <div className="form-group">
            <input
              className="form-control post-title-title"
              type="text"
              name="title"onChange={(e)=>{
                setTitle(e.target.value);
              }}
              placeholder="title"
              required
            />
            
            <input
              className="form-control post-text"
              type="textbox"
              name="text" onChange={(e)=>{
                setTextBox(e.target.value);
              }}
              placeholder="Text"
              required
            />
            <div className='submit-button'>
            <button className="form-control btn btn-primary " type="submit">
              Submit
            </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  )
}
