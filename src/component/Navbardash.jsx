import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'


function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <nav id='nav' className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container-fluid position-relative">
        <span id='titulo' className="navbar-brand">📊💅 Dashboard Administrador</span>
        <button className="btn btn-logout position-absolute end-0 me-3"onClick={() => navigate("/login")}>Cerrar sesión</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
