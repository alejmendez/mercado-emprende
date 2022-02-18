import { useState } from "react";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const menuList = [
  {
    to: "/",
    key: "home",
    text: "Inicio",
  },
  {
    to: "/info",
    key: "info",
    text: "Información",
  },
  {
    to: "/recharge",
    key: "recharge",
    text: "Recarga",
  },
  {
    to: "/withdraw",
    key: "withdraw",
    text: "Retirar",
  },
  {
    to: "/invitation",
    key: "invite",
    text: "Invitar",
  },
];

const title = "Menú";

const Header = () => {
  const [name, setName] = useState("John Doe");
  return (
    <div className="header">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#">Hola {name}</Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                {title}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {menuList.map(({ to, key, text }) => (
                  <Link className="nav-link" to={to} key={key}>
                    {text}
                  </Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
