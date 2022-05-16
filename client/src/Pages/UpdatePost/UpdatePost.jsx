import React, { useState} from 'react'
import './UpdatePost.css'

export default function UpdatePost() {
    const [title, setTitle] = useState('');
    const [textBox, setTextBox] = useState('');
    const [userName, setUserName] = useState('');
  
  
    const submitPost = async (e) => {
      e.preventDefault();
      try{
        const response = await fetch('http://localhost:3003/Post', {
          method: 'PUT', headers: {"content-Type": 'application/json'}, body: JSON.stringify({title: title, postText: textBox, userName: userName})
        });
        const json = await response.json();
        console.log(json);
      }catch(e){
        console.log(e);
      }
      
      }
  return (
    <div className="update-post-container">
    <span className="update-title">Update Post</span>
    <div className='update-username'>
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

    
    <div className="form">
      <form onSubmit={submitPost}>
        <div className="form-group">
          <textarea
            className="form-control update-title-title"
            type="text"
            name="title"onChange={(e)=>{
              setTitle(e.target.value);
            }}
            placeholder="title"
            required
          />
          
          <textarea
            className="form-control update-text"
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
