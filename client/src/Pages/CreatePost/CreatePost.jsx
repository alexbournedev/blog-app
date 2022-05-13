import React from 'react'
import "./CreatePost.css"

export default function createPost() {
  return (
    <div className="create-post-container">
      <span className="post-title">Create Post
      <div className='post-username'>
        <input
                className="form-control "
                type="text"
                name="name"
                placeholder="username"
                required
                />
      </div>

      </span>
      <div className="form">
        <form>
          <div className="form-group">
            <input
              className="form-control post-title-title"
              type="text"
              name="title"
              placeholder="title"
              required
            />
            
            <input
              className="form-control post-text"
              type="textbox"
              name="text"
              placeholder="Text"
              required
            />
            <div className='submit-button'>
            <a href="/Create" className="form-control btn btn-primary " type="submit">
              Submit
            </a>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  )
}
