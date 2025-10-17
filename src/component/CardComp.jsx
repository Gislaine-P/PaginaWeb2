import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function CardComponente({ producto }){


return (
 <Link to={`/producto/${producto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Card className="col-12 col-sm-6 col-md-4 col-lg-3" style={{ width: '18rem' }} >
      <Card.Img variant="top" src={producto.imagen} className="card-img-top rounded-top"/>
      <Card.Body className="card-body">
        <Card.Title className="card-title">{producto.nombre}</Card.Title>
      </Card.Body>
    </Card>
    </Link>
  );
};

export default CardComponente
