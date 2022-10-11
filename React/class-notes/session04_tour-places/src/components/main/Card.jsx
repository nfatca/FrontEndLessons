import React from "react";

const Card = (data) => {
  //   console.log(data);
  const { id, title, image, desc } = data;
  return (
    <div className="cards">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <img src={image} alt="img" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
