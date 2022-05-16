import React, {useState, useEffect } from 'react'
import './FullPost.css'

export default function FullPost() {
    const [fullPost, setFullPost] = useState([]);

    useEffect(() => {
      readPost();
    }, [])
  
    const readPost = async () => {
      try{
        const response = await fetch('http://localhost:3003/Posts');
        const json = await response.json();
        setFullPost(json);
      }catch(e){
        console.log(e);
      }
    }
  return (
    
      <div className="post-container">
        <div className="post">
          <h2 className="fullPost-title">Title</h2>
          <div>
            <span className='info'>Will_Reed_3rd</span>
          </div>
         <div>
            <span className='info'>May 13, 2022 00:00:00</span>
         </div>
          <p className="fullPost-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Pretium nibh ipsum consequat nisl vel pretium lectus. Blandit turpis cursus in hac habitasse platea. Ipsum nunc aliquet bibendum enim facilisis gravida. Diam quis enim lobortis scelerisque fermentum. Ut etiam sit amet nisl purus in mollis nunc sed. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Egestas congue quisque egestas diam in arcu. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Risus at ultrices mi tempus imperdiet nulla malesuada. Ultricies mi quis hendrerit dolor magna eget. Pellentesque id nibh tortor id aliquet lectus proin nibh. Eu nisl nunc mi ipsum faucibus. Eu nisl nunc mi ipsum. Nisl purus in mollis nunc sed id semper. Nunc sed augue lacus viverra vitae congue eu consequat ac. Congue quisque egestas diam in. Pretium quam vulputate dignissim suspendisse. Feugiat in fermentum posuere urna.

Quis eleifend quam adipiscing vitae proin sagittis. Egestas diam in arcu cursus euismod quis viverra nibh. Arcu felis bibendum ut tristique. A scelerisque purus semper eget duis at tellus. Fermentum iaculis eu non diam phasellus vestibulum. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Cursus metus aliquam eleifend mi. Ut eu sem integer vitae justo eget magna fermentum. Sapien faucibus et molestie ac feugiat sed. Mi proin sed libero enim sed. Lacus luctus accumsan tortor posuere. Tristique magna sit amet purus gravida quis. Dolor morbi non arcu risus quis varius quam. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Ut ornare lectus sit amet est placerat in. Cursus in hac habitasse platea dictumst. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Felis imperdiet proin fermentum leo.</p>
          <button className="btn btn-secondary delete" type="submit">Delete</button>
          <a href='/UpdatePost' className="btn btn-success" type="submit">Update</a>
        </div>
      </div>
    );

}
