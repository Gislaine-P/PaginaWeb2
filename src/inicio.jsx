import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import NavbarComponente from "./componenteNav";
import FooterComponente from "./footer";

function Inicio() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://demo8730279.mockable.io/productos")
      .then(data => setProductos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <NavbarComponente />
        <h1 className="text-center mb-4">Inicio</h1>
      <FooterComponente />
    </>
  );
}

export default Inicio;
