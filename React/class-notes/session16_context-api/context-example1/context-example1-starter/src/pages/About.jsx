import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container className="p-3">
      <h1 className="text-center">ABOUT US</h1>
      <Row className="text-center justify-content-center">
        <Col md={6} lg={4}>
          <i className="fas fa-globe-americas fa-2x"></i>
          <h4>Online Courses</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium veniam tempore odio, distinctio neque enim eveniet
            consequatur magnam vero ut.
          </p>
        </Col>

        <Col md={6} lg={5}>
          <i className="fas fas fa-headset fa-2x"></i>
          <h4>Full-time Mentoring</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium veniam tempore odio, distinctio neque enim eveniet
            consequatur magnam vero ut. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Assumenda sit inventore quae cupiditate, unde
            voluptate.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <i className="fas fa-book-open fa-2x"></i>
          <h4>Learn Yourself</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium veniam tempore odio, distinctio neque enim eveniet
            consequatur magnam vero ut.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
