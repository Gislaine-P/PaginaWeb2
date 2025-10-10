import NavbarComponente from "./componenteNav"
import FooterComponente from "./footer"

function Nosotros(){
    return(
        <>
        <NavbarComponente/>
        <h1>
            ¿Quiénes somos?
        </h1>
        <p>
            Somos un pequeño proyecto apasionado por el estilo y la belleza de las uñas. Aquí no encontrarás promesas grandilocuentes, sino productos hechos con cariño y dedicación para que cada persona pueda expresar su estilo único sin complicaciones.
        </p>
        <p>
            "La belleza está en los pequeños detalles, y nosotros cuidamos cada uno de ellos."
        </p>
        <FooterComponente/>
        </>
    )
}

export default Nosotros