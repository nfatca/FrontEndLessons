import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Container className="text-center" style={{ marginTop: "10rem" }}>
      <Navbar fixed="bottom" className="justify-content-center bg-dark p-4">
        <p className="text-light ">Copyright {new Date().getFullYear()}</p>
      </Navbar>
    </Container>
  );
}

export default Footer;
