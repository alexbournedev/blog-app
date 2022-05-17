import React, {useState, useEffect} from 'react'
import './FullPost.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function FullPost() {
    const [fullPost, setFullPost] = useState([]);
  const {id} = useParams();
  const nav = useNavigate();

    useEffect(() => {
      readPost(id);
    }, [id])
  
    const readPost = async (id) => {
      try{
        const response = await fetch(`http://localhost:3003/Posts/${id}`);
        const json = await response.json();
        setFullPost(json);
        nav()
      }catch(e){
        console.log(e);
      }
    }
  return (
    
      <div className="post-container">
              <div className="fullPost">
                <h2 className="fullPost-title">{fullPost.title}</h2>
                <div>
                  <span className='info'>{fullPost.userName}</span>
                </div>
                <div>
                  <span className='info'>May 13, 2022 00:00:00</span>
                </div>
                  <p className="fullPost-text">{fullPost.postText}</p>
              </div>  
          <div className='fullPost-buttons'>
            <button className="btn btn-secondary delete" type="submit">Delete</button>
        
            <button className="btn btn-success" type="submit">Update</button>
          </div>
          
        
      </div>
    );

}
