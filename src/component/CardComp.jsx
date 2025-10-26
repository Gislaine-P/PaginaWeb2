import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardComponente({ producto }) {
  return (
    <Card className="producto-card shadow-sm border-0">
      <div className="img-container">
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top"
        />
      </div>

      <Card.Body className="text-center">
        <Card.Title className="fw-bold text-dark mb-2">
          {producto.nombre}
        </Card.Title>

        <p className="text-success fs-5 mb-3">${producto.precio}</p>

        <Link
          to="/producto"
          state={{ producto }}
          className="btn btn-outline-success rounded-pill px-4"
        >
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardComponente;
