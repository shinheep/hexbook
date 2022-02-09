import "./header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Routes, Route, Link} from 'react-router-dom';
import Favorites from "../favorites/Favorites";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Color Palettes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/favorites">Favorites</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
};

export default Header;
