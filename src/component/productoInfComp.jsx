import { useState } from "react";
import { Link } from "react-router-dom";

function ProductoInfoComponente({ producto }) {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => {
    setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const guardarCantidad = () => {
    if (!producto) {
      alert("No has seleccionado un producto.");
      return;
    }

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const existe = carrito.find((p) => p.id === producto.id);

    if (existe) {
      existe.cantidad += cantidad;
    } else {
      carrito.push({ id: producto.id, cantidad: cantidad });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    setCantidad(1);
    alert("Producto agregado al carrito");
  };

  return (
    <div className="Producto-cuerpo">
      <div className="container pt-5 mt-5">
        <img
          id="imagen"
          src={producto.imagen}
          alt="imagen producto"
          className="img-fluid rounded-start w-100 h-100 object-fit-cover"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="col-md-7">
        <h1 id="nombre" className="card-title fw-bold mb-3">
          {producto.nombre}
        </h1>
        <p id="descripcion" className="card-text text-muted">
          {producto.descripcion}
        </p>
        <p className="fs-5">
          <strong>Precio:</strong> $
          <span id="precio" className="text-success">
            {producto.precio}
          </span>
        </p>

        <div className="d-flex align-items-center mb-3">
          <button className="btn btn-outline-secondary" onClick={disminuir}>
            -
          </button>
          <input
            type="number"
            value={cantidad}
            readOnly
            className="form-control text-center mx-2"
            style={{ width: "60px" }}
          />
          <button className="btn btn-outline-secondary" onClick={aumentar}>
            +
          </button>
        </div>

        <button className="btn btn-success me-2" onClick={guardarCantidad}>
          Agregar al carrito
        </button>

        <Link to="/carrito" className="btn btn-outline-success">
          Ir hacia carrito
        </Link>
      </div>
    </div>
  );
}

export default ProductoInfoComponente;
