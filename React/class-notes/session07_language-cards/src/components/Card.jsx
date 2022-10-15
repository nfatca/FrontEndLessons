import React from "react";
import Language from "./Language";
import { data } from "../helpers/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card = () => {
  //   console.log(data);
  return (
    <Container className="rounded-3 mt-4 p-4" style={{ background: "#f48b29" }}>
      <h1 className="text-white my-2">Language</h1>
      <Row className="g-3 ">
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key="index">
              <Language lang={lang} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
