import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const People = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <Container className="text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <Row className="justify-content-center g-3">
        {people?.map((person, index) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              type="button"
              onClick={() => navigate(`${id}`)}
            >
              <Image className="rounded" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default People;
