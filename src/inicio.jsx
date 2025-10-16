import { useContext } from "react";
import { ProductoContext } from "./context/productoContext";
import NavbarComponente from "./component/NavComp";
import FooterComponente from "./component/footerComp";
import CardComponente from "./component/CardComp";
import CarruselComponente from "./component/CarruselComp";

function Inicio() {
  const {productos, loading} = useContext(ProductoContext);

  if(loading) return<p>Cargando productos...</p>;


  return (
    <>
      <NavbarComponente />
      <CarruselComponente/>
      <h1 className="text-center mb-4">Inicio</h1>

      <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
        {productos.map(prod => (
          <CardComponente key={prod.id} producto={prod} />
        ))}
      </div>

      <FooterComponente />
    </>
  );
}

export default Inicio;