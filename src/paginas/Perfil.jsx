import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import "bootstrap/dist/css/bootstrap.min.css";

export function Perfil() {
    const navigate = useNavigate();
    const { user, logout } = useContext(LoginContext);

    const [modalVisible, setModalVisible] = useState(false);
    const [campoEditar, setCampoEditar] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");

    useEffect(() => {
        if (!user) {
        navigate("/login");
        return;
        }

        const storedCorreo = localStorage.getItem(`correo_${user}`) || "correo@ejemplo.cl";
        const storedDireccion = localStorage.getItem(`direccion_${user}`) || "Dirección no definida";

        setCorreo(storedCorreo);
        setDireccion(storedDireccion);
    }, [user, navigate]);

    useEffect(() => {
        if (user) {
        localStorage.setItem(`correo_${user}`, correo);
        localStorage.setItem(`direccion_${user}`, direccion);
        }
    }, [correo, direccion, user]);

    const abrirModal = (campo) => {
        setCampoEditar(campo);
        setInputValue(campo === "correo" ? correo : direccion || "");
        setModalVisible(true);
    };

    const cerrarModal = () => setModalVisible(false);

    const guardarCambios = (e) => {
        e.preventDefault();
        if (campoEditar === "correo") setCorreo(inputValue);
        else if (campoEditar === "direccion") setDireccion(inputValue);
        cerrarModal();
    };

    const cerrarSesion = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="text-center w-100" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h2>Bienvenid@, {user}!</h2>
        <p>Nombre: {user}</p>
        <p>
            Correo: {correo}
            <button onClick={() => abrirModal("correo")} className="btn btn-link p-0 ms-2">
            <i className="bi bi-pencil-square text-warning"></i>
            </button>
        </p>
        <p>
            Dirección: {direccion}
            <button onClick={() => abrirModal("direccion")} className="btn btn-link p-0 ms-2">
            <i className="bi bi-pencil-square text-warning"></i>
            </button>
        </p>

        <div className="mt-3">
            <button onClick={() => navigate("/catalogo")} className="btn btn-primary w-100 mb-2">
            Ir al Catálogo
            </button>
            <button onClick={cerrarSesion} className="btn btn-secondary w-100">
            Cerrar Sesión
            </button>
        </div>

        {modalVisible && (
            <>
            <div className="modal-backdrop fade show"></div>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Editar {campoEditar}</h5>
                    <button type="button" className="btn-close" onClick={cerrarModal}></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={guardarCambios}>
                        <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            required
                        />
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={cerrarModal}>
                            Cerrar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Guardar cambios
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </>
        )}
        </div>
    );
}
