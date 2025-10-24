import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";





function CardComponente({ producto }) {
  return (
    <Card className="card">
      <Img src={producto.imagen} alt={producto.nombre} className="card-img-top" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{producto.nombre}</h5>
        <p className="card-text">${producto.precio}</p>
        </Card.Body>
        </Card>

        {/* Pasamos el producto a la ruta /producto */}
        <Link
          to="/producto"
          state={{ producto }}
          className="btn btn-success"
        >
          Ver más
        </Link>
  
  )
}



export default CardComponente
