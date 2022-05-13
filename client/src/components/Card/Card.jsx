import React, {useState, useEffect } from "react";
import "./Card.css";

const Card = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    readPost();
  }, [])

  const readPost = async () => {
    try{
      const response = await fetch('http://localhost:3003/Posts');
      const json = await response.json();
      setCardData(json);
    }catch(e){
      console.log(e);
    }
  
  }
  return ( 
    <div className="container">
      {cardData.map((post) => {
      return (
        <div className="card-container">
          <div className="card">
            <h2 className="card-title"> {post.title} </h2>
            <p className="blurb"> {post.postText} </p>
            <button className="card-button" type="submit">Read more...</button>
          </div>
        </div>
      );
    })}
    </div>


  );
};

export default Card;
