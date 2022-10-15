import React from "react";
import Language from "./Language";
import { data } from "../helpers/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card = () => {
  //   console.log(data);
  return (
    <Container className="rounded-3" style={{ background: "#f48b29" }}>
      <h1>Language</h1>
      <Row>
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key="index">
              <Language lang={lang} />;
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
