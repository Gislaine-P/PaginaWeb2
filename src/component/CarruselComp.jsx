import Carousel from 'react-bootstrap/Carousel';

function CarruselComponente() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/1200x/58/2c/fe/582cfef6ba64da56775eced8189ba2e1.jpg"
          alt="Primera colección"
        />
        <Carousel.Caption>
          <h5>Primera colección</h5>
          <p>Explora nuestros diseños más populares del mes.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/1200x/58/2c/fe/582cfef6ba64da56775eced8189ba2e1.jpg"
          alt="Novedades"
        />
        <Carousel.Caption>
          <h5>Novedades</h5>
          <p>Recién llegadas: uñas press-on exclusivas para ti.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/1200x/58/2c/fe/582cfef6ba64da56775eced8189ba2e1.jpg"
          alt="Estilo único"
        />
        <Carousel.Caption>
          <h5>Estilo único</h5>
          <p>Diseños personalizados para cada ocasión especial.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselComponente
