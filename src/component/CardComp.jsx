import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function CardComponente({ producto }){
  const navigate = useNavigate

  const UbicacionPro = () =>{
    navigate('./Producto/${producto.id}');
  }

      return (
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Button onClick={UbicacionPro}>Comprar</Button>
      </Card.Body>
    </Card>
  );
}
    
export default CardComponente