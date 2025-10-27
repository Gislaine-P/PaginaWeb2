import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../component/Navbardash';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    const cargarUsuarios = () => {
        let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
        const vistos = new Set();
        const usuariosUnicos = usuariosGuardados.filter(user => {
            if (vistos.has(user.nombre_de_usuario)) return false;
            vistos.add(user.nombre_de_usuario);
            return true;
        });
        const ultimos = usuariosUnicos.slice(-5).reverse();
        setUsuarios(ultimos);
    };

    useEffect(() => {
        cargarUsuarios();
        const actualizar = () => cargarUsuarios();
        window.addEventListener("storage", actualizar);
        return () => window.removeEventListener("storage", actualizar);
    }, []);

    return (
        <>
        <div className='vh-100'>
            <Navbar />

            <div className="d-flex align-items-center justify-content-center vh-100">
                <h1>Holaaa Administrador</h1>
            </div>

            <div className="container py-5 mt-5">
                <div className="row g-4 mb-5">
                    <div className="col-md-4">
                        <div id="cuadro1" className="card text-center shadow-lg border-0">
                            <div className="card-body">
                                <h5 className="card-title">Usuarios Nuevos 👥</h5>
                                <p id="usu" className="display-4 fw-bold">120</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div id="cuadro2" className="card text-center shadow-lg border-0">
                            <div className="card-body">
                                <h5 className="card-title">Ventas del Mes 🛒</h5>
                                <p id="ventas" className="display-4 fw-bold">450</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div id="cuadro3" className="card text-center shadow-lg border-0">
                            <div className="card-body">
                                <h5 className="card-title">Ganancias de este mes 💰</h5>
                                <p id="ganancias" className="display-4 fw-bold">$2.000.000 CLP</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="dropdown">
                            <button className="btn btn-azul-oscuro w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" onClick={() => navigate("/agregarproducto")}>Agregar producto</a></li>
                                <li><a className="dropdown-item" onClick={() => navigate("/editareliminarproducto")}>Editar producto o eliminar producto</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="dropdown">
                            <button className="btn btn-azul-oscuro w-100 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Usuarios</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item agregarus" onClick={() => navigate("/agregarusuario")}>Agregar usuario</a></li>
                                <li><a className="dropdown-item editarus" onClick={() => navigate("/editarusuario")}>Editar usuario o Eliminar usuario</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <div className="card shadow-lg border-0">
                        <div className="card-body">
                            <h5 id="ultimos-usuarios" className="card-title text-center">Últimos 5 Usuarios Añadidos 👥</h5>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover align-middle text-center">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Nombre de Usuario</th>
                                            <th>Correo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usuarios.length > 0 ? (
                                            usuarios.map((user, index) => (
                                                <tr key={index}>
                                                    <td>{user.nombre_de_usuario}</td>
                                                    <td>{user.correo}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="2">No hay usuarios registrados</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Dashboard;
