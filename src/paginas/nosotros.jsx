import FooterComponente from "../component/footerComp";
import NavbarComponente from "../component/NavComp";


function Nosotros() {
  return (
    <>
      <NavbarComponente />
      <main className="container mt-5 pt-5">
        <section className="text-center py-5">
          <h1 className="display-5 fw-bold mb-4">¿Quiénes somos?</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Somos un pequeño proyecto apasionado por el estilo y la belleza de
            las uñas. Aquí no encontrarás promesas grandilocuentes, sino
            productos hechos con cariño y dedicación para que cada persona pueda
            expresar su estilo único sin complicaciones.
          </p>
        </section>

        <section
          className="bg-light rounded-3 p-4 mx-auto"
          style={{ maxWidth: "700px" }}>
          <blockquote className="blockquote mb-0">
            <p className="fs-5 fst-italic">
              "La belleza está en los pequeños detalles, y nosotros cuidamos
              cada uno de ellos."
            </p>
            <footer className="blockquote-footer mt-3">
              Equipo Pressé Beauty
            </footer>
          </blockquote>
        </section>
      </main>
      <FooterComponente />
    </>
  );
}

export default Nosotros;
