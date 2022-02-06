import "./header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Color Palettes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Favorites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
