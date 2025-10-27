import { useLocation } from "react-router-dom";
import FooterComponente from "../component/footerComp";
import NavbarComponente from "../component/NavComp";
import ProductoInfoComponente from "../component/productoInfComp";


function ProductoInformacion(){
    const location = useLocation();
    const { producto } = location.state || {};


    if(!producto){
        return <p>No se encontró el producto.</p>
    }

    return(
        <>
        <NavbarComponente/>
        <ProductoInfoComponente producto={producto}/>
        <FooterComponente/>
        </>
    )
}

export default ProductoInformacion