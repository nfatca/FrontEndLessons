import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const Language = ({ lang }) => {
  const { img, name, options } = lang;
  const [showDesc, setShowDesc] = useState(false);
  //   console.log(lang);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2"
      onClick={() => setShowDesc(!showDesc)}
    >
      <div>
        <Image src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </div>

      <ol>
        {options.map((item) => {
          return <li className="h5 text-start">{item}</li>;
        })}
      </ol>
    </Container>
  );
};

export default Language;
