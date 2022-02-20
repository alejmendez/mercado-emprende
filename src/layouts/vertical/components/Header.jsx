import { useState } from "react";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import getHeaderMenu from "../../../services/getHeaderMenu";

const menuList = getHeaderMenu();

const Header = () => {
  const title = "Menú";

  const [name, setName] = useState("John Doe");
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e) => {
    setExpanded(false)
  };
  const handleClickToggle = (e) => {
    setExpanded(!expanded);
  };

  return (
    <Navbar className="header" bg="light" expand={false} expanded={expanded}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleClickToggle}/>
        <Navbar.Brand href="#">Hola {name}</Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton onHide={handleClick}>
            <Offcanvas.Title id="offcanvasNavbarLabel">{title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {menuList.map(({ to, key, text }) => (
                <Link className="nav-link" to={to} key={key} onClick={handleClick}>
                  {text}
                </Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
