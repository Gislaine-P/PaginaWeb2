import { Link } from "react-router-dom"
import FooterComponente from "./component/footerComp"
import NavbarComponente from "./component/NavComp"


function Contacto(){

    return(
        <>
        <NavbarComponente/>
        <h1>Contacto</h1>


          <main className="container mt-5 pt-5">
        <section className="text-center mb-5">
      <h1 className="display-5 fw-bold">Contacto</h1>
      <p className="lead text-muted">¿Tienes alguna pregunta o quieres saber más? ¡Escribenos!</p>
    </section>

    <div className="row justify-content-center">
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="tu@correo.com" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mensaje" rows="5" placeholder="Escribí tu mensaje aquí..." required></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100">Enviar</button>
        </form>
      </div>
    </div>

    <section className="mt-5 text-center">
      <h2 className="h4 mb-3">También puedes encontrarnos acá:</h2>
      <p className="mb-1">📞 +56 9 XXXX XXXX</p>
      <p className="mb-1">✉️ contacto@pressebeauty.com</p>
      <p className="mb-4">
        <Link to="#" className="me-3 text-decoration-none">Instagram</Link>
        <Link to="#" className="me-3 text-decoration-none">Facebook</Link>
        <Link to="#" className="text-decoration-none">Twitter</Link>
      </p>
    </section> 
  </main>
        <FooterComponente/>
        </>
    )
}

export default Contacto