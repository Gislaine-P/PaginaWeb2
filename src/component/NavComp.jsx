import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Offcanvas, Button } from "react-bootstrap";
import { LoginContext } from "../context/LoginContext";

function NavbarComponente() {
  const { user, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate("/login");
  };

  const esAdmin = user?.nombre_de_usuario === "administrador";

  return (
    <Navbar expand="lg" bg="light" className="shadow-sm mb-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-success">
          PresséBeauty
        </Navbar.Brand>

        {!esAdmin && (
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        )}

        {!esAdmin && (
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menú
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3">
                <Nav.Link as={NavLink} to="/">
                  Inicio
                </Nav.Link>
                <Nav.Link as={NavLink} to="/nosotros">
                  Nosotros
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contacto">
                  Contacto
                </Nav.Link>
                <Nav.Link as={NavLink} to="/carrito">
                  Carrito
                </Nav.Link>
              </Nav>

              <div className="d-flex flex-column flex-lg-row gap-2">
                {!user ? (
                  <>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => navigate("/login")}
                    >
                      Iniciar sesión
                    </Button>
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => navigate("/registro")}
                    >
                      Registrarse
                    </Button>
                  </>
                ) : (
                  <>
                    <Nav.Link as={NavLink} to="/perfil">
                      Perfil
                    </Nav.Link>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={cerrarSesion}
                    >
                      Cerrar sesión
                    </Button>
                  </>
                )}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        )}

        {esAdmin && (
          <div className="ms-auto d-flex align-items-center gap-3">
            <span className="fw-bold text-success">
              Bienvenido, {user.nombre_de_usuario}
            </span>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={cerrarSesion}
            >
              Cerrar sesión
            </Button>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarComponente;
