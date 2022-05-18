import React, { useState} from 'react'
import './UpdatePost.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function UpdatePost() {
    const [title, setTitle] = useState('');
    const [textBox, setTextBox] = useState('');
    const [userName, setUserName] = useState('');
    const nav =useNavigate();
    const {id} = useParams();
   
  // concept starter code to be able to add the current post in the update post fields to be edited
    // const [update, setUpdate] = useState({id: {id}, title: title, postText: textBox, userName: userName})

    // useEffect(() => {
    //   readPost(id);
    // }, [id])
  
    // const readPost = async (id) => {
    //   try{
    //     const response = await fetch(`http://localhost:3003/Posts/${id}`);
    //     const json = await response.json();
    //     setFullPost(json);
    //   }catch(e){
    //     console.log(e);
    //   }
    // }

  //sending information to database
    const submitPost = async (e) => {
      e.preventDefault();
      try{
        const response = await fetch(`http://localhost:3003/Posts/${id}`, {
          method: 'PUT', headers: {"content-Type": 'application/json'}, body: JSON.stringify({title: title, postText: textBox, userName: userName})
        });
        const json = await response.json();
        console.log(json);
        nav(`/Posts/${id}`)
      }catch(e){
        console.log(e);
      }
      
      }

      //test to see if inputs are logging to the browser
    // useEffect(() => { 
    //     console.log(userName + title + textBox)
    // }, [userName, title, textBox]);

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
              placeholder="user name"
  
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
            placeholder="Title"
          
          />
          
          <textarea
            className="form-control update-text"
            type="textbox"
            name="text" onChange={(e)=>{
              setTextBox(e.target.value);
            }}
            placeholder="Text"
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
