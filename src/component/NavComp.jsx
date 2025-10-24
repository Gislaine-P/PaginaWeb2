import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Offcanvas, Form, Button } from "react-bootstrap";

function NavbarComponente() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  

  const cerrarSesion = () =>{
    localStorage.removeItem("usuario");
    window.location.reload();
  };


  {/*  */}

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

            {/*Cuenta*/}
            <div className="border-top pt-3 mt-3">
              <p className="text-muted mb-1">
                <strong>Mi cuenta</strong>
              </p>

              {usuario ? (
                <>
              <Nav.Link as={NavLink} to="/login">Perfil</Nav.Link>
              <Nav.Link as={NavLink} to="#" onClick={cerrarSesion}>Cerrar Sesion
              </Nav.Link>
              </>
              ):(
                <>
                <Nav.Link as={NavLink} to="/login">Iniciar sesion</Nav.Link>
                <Nav.Link as={NavLink} to="/registro">Registrarse</Nav.Link>
                </>
              )}
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponente;
