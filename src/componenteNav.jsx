import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Offcanvas, Form, Button } from "react-bootstrap";

function NavbarComponente() {
  return (
    <Navbar bg="light" expand={false} fixed="top">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          Pressé Beauty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/nosotros">
                Nosotras
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contacto">
                Contacto
              </Nav.Link>
            </Nav>
            <Form className="d-flex mt-3">
              <Form.Control type="search" placeholder="Buscar" className="me-2" />
              <Button variant="outline-success">Buscar</Button>
            </Form>
            <div className="border-top pt-3 mt-3">
              <p className="text-muted mb-1">
                <strong>Mi cuenta</strong>
              </p>
              <Nav.Link as={NavLink} to="/login">Iniciar sesión</Nav.Link>
              <Nav.Link as={NavLink} to="/registro">Registrarse</Nav.Link>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponente;
