import React from "react";
import "./Main.css";

const main = (props) => {
  const { id, title, img, desc } = props;
  return (
    <div className="main">
      <div className="container">
        <h1>{title}</h1>
        <img src={img} alt="img" />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default main;
