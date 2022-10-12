import React from "react";
import Card from "../card/Card";
import "./Main.css";
import Data from "../../helper/Data";

const Main = () => {
  return (
    <div className="container_main">
      {Data.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
};

export default Main;
