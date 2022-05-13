import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">TITLE</h2>
        <p className="blurb">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          commodi.
        </p>
        <button className="card-button" type="submit">
              Read more...
            </button>
      </div>
    </div>
  );
};

export default Card;
