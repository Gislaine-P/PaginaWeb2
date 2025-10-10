import { useEffect, useState } from "react";
import NavbarComponente from "./component/NavComp";
import FooterComponente from "./component/footerComp"

function Inicio() {


  return (
    <>
      <NavbarComponente />
        <h1 className="text-center mb-4">Inicio</h1>
      <FooterComponente />
    </>
  );
}

export default Inicio
