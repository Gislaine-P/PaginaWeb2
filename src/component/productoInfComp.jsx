function ProductoInfoComponente() {

function aumentar() {
    cantidad++;
    cantidadInput.value = cantidad;
}

function disminuir() {
    if (cantidad > 1) {
        cantidad--;
        cantidadInput.value = cantidad;
    }
}

/*function guardarCantidad() {
    if (!producto) {
        alert("No has seleccionado un producto.");
        return;
    }

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existe = carrito.find(p => p.id === producto.id);

    if (existe) {
        existe.cantidad += cantidad; 
    } else {
        carrito.push({ id: producto.id, cantidad: cantidad }); 
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    cantidad = 1;
    cantidadInput.value = cantidad;

    alert("Producto agregado al carrito");*/

  <div className="Producto-cuerpo">

    <div className="container pt-5 mt-5">
      <div className="card shadow mb-5">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              id="imagen"
              src={Producto.imagen}
              alt="imagen producto"
              className="img-fluid rounded-start w-100 h-100 object-fit-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
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
                <button
                  className="btn btn-outline-secondary me-2"
                  onClick={disminuir}
                >
                  -
                </button>
                <input
                  type="text"
                  id="cantidad"
                  className="form-control text-center"
                  value={cantidad}
                  readOnly
                  style={{ width: "60px" }}
                />
                <button
                  className="btn btn-outline-secondary ms-2"
                  onClick={aumentar}>+
                </button>
              </div>

              <button className="btn btn-primary" onClick={guardarCantidad}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-end">
        <a href="carrito.html" className="btn btn-outline-dark">
          Ir al carrito
        </a>
      </div>
    </div>
  </div>;
}

export default ProductoInfoComponente;
