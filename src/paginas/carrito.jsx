import { useState, useEffect, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { ProductoContext } from "../context/productoContext";

function Carrito() {
  const { productos, loading } = useContext(ProductoContext);
  const [carritoDetallado, setCarritoDetallado] = useState([]);
  const [total, setTotal] = useState(0);

  const leerCarrito = () => {
    try {
      const data = localStorage.getItem("carrito");
      const parsed = JSON.parse(data) || [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const guardarCarrito = (items) => {
    localStorage.setItem("carrito", JSON.stringify(items));
  };

  const actualizarCarrito = () => {
    if (loading) return;
    const carrito = leerCarrito();

    const detallado = carrito
      .map((item) => {
        const producto = productos.find((p) => p.id === item.id);
        if (!producto) return null;
        return {
          ...producto,
          cantidad: item.cantidad,
          subtotal: producto.precio * item.cantidad,
        };
      })
      .filter(Boolean);

    setCarritoDetallado(detallado);
    const totalCalc = detallado.reduce((acc, p) => acc + p.subtotal, 0);
    setTotal(totalCalc);
  };

  useEffect(() => {
    actualizarCarrito();
  }, [productos, loading]);

  const cambiarCantidad = (id, nuevaCantidad) => {
    const carrito = leerCarrito();
    const actualizado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: nuevaCantidad } : item
    );
    guardarCarrito(actualizado);
    actualizarCarrito();
  };

  const eliminarProducto = (id) => {
    const carrito = leerCarrito().filter((item) => item.id !== id);
    guardarCarrito(carrito);
    actualizarCarrito();
  };

  const comprar = () => {
    if (carritoDetallado.length === 0) {
      alert("Tu carrito está vacío 😅");
      return;
    }
    alert("Compra realizada correctamente ✨");
    localStorage.removeItem("carrito");
    setCarritoDetallado([]);
    setTotal(0);
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <p>Cargando carrito...</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-success">Tu carrito</h2>

      {carritoDetallado.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <>
          {carritoDetallado.map((item) => (
            <div
              key={item.id}
              className="d-flex flex-wrap align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div>
                  <h5>{item.nombre}</h5>
                  <p className="text-muted mb-1">${item.precio} c/u</p>
                  <p className="fw-bold mb-0">Subtotal: ${item.subtotal}</p>
                </div>
              </div>

              <div className="d-flex flex-column align-items-end mt-3 mt-md-0 gap-2">
                <div className="d-flex align-items-center gap-2">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() =>
                      cambiarCantidad(item.id, item.cantidad - 1)
                    }
                  >
                    -
                  </Button>
                  <span>{item.cantidad}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() =>
                      cambiarCantidad(item.id, item.cantidad + 1)
                    }
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => eliminarProducto(item.id)}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          ))}

          <hr />
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h4>Total: ${total}</h4>
            <Button variant="success" onClick={comprar}>
              Comprar
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Carrito;
