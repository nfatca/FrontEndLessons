import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const data = [
  {
    id: 1,
    name: "HTML",
    text: "Welcome to Our HTML Course",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png",
  },
  {
    id: 2,
    name: "CSS",
    text: "Welcome to Our CSS Course",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png",
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    text: "Welcome to Our JS Course",
    img: "https://www.seekpng.com/png/full/80-803501_javascript-logo-logo-de-java-script-png.png",
  },
];

const Courses = () => {
  return (
    <Container className="text-center mt-4 p-4">
      <h1>OUR COURSES</h1>
      <Row className="justify-content-center gap-4 align-items-center mt-4">
        {data.map((course) => {
          const { id, img, name, text } = course;
          return (
            <Col className="col d-flex justify-content-center" key={id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="danger">Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Courses;
