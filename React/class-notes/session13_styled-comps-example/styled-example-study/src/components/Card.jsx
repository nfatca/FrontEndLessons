import React from "react";
import content from "../data";
import { CardImg, Main, CardTitle, Description } from "./styles/Card.styled";

const Card = () => {
  return (
    <>
      {content.map((item) => {
        const { id, body, title, image } = item;
        return (
          <Main key={id} id={id}>
            <div>
              <CardImg src={`./images/${image}`} />
            </div>
            <div>
              <CardTitle>{title}</CardTitle>
              <Description>{body}</Description>
            </div>
          </Main>
        );
      })}
    </>
  );
};

export default Card;
