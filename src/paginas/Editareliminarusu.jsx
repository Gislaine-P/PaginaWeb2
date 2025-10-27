import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Editareliminarusu() {
    const [usuarios, setUsuarios] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [usuarioEditar, setUsuarioEditar] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
        setUsuarios(usuariosGuardados);
    }, []);

    const handleBuscar = (e) => setFiltro(e.target.value);
    const handleAbrirModal = (usuario) => { setUsuarioEditar(usuario); setShowModal(true); };
    const handleCerrarModal = () => { setUsuarioEditar(null); setShowModal(false); };

    const handleGuardarCambios = (e) => {e.preventDefault();
        const nuevosUsuarios = usuarios.map((u) => u === usuarioEditar ? usuarioEditar : u);
        setUsuarios(nuevosUsuarios);
        localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
        handleCerrarModal();
    };

    const handleEliminar = (usuario) => {
        if (window.confirm("¿Seguro que deseas eliminar este usuario?")) {
            const nuevosUsuarios = usuarios.filter((u) => u !== usuario);
            setUsuarios(nuevosUsuarios);
            localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
        }
    };

    const usuariosFiltrados = usuarios.filter((u) => u.nombre_de_usuario.toLowerCase().includes(filtro.toLowerCase()));

    return (
        <div className="container mt-4">
            <Button variant="secondary" className="mb-3" onClick={() => navigate("/dashboard")}>← Volver al Dashboard</Button>
            <h2 className="mb-3">👤 Gestión de Usuarios</h2>
            <Form.Control type="text" placeholder="🔎 Buscar por nombre de usuario..." value={filtro} onChange={handleBuscar} className="mb-3" />
        <div className="card shadow-sm">
            <table className="table table-striped table-bordered mb-0">
            <thead className="table-dark">
                <tr>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Dirección</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {usuariosFiltrados.length > 0 ? (
                usuariosFiltrados.map((usuario, index) => (
                    <tr key={index}>
                    <td>{usuario.nombre_de_usuario}</td>
                    <td>{usuario.correo}</td>
                    <td>{usuario.direccion}</td>
                    <td>
                        <Button variant="warning" size="sm" className="me-2" onClick={() => handleAbrirModal(usuario)}>✏️ Editar</Button>
                        <Button variant="danger" size="sm" onClick={() => handleEliminar(usuario)}>🗑️ Eliminar</Button>
                    </td>
                    </tr>
                ))
                ) : (
                <tr><td colSpan="4" className="text-center">No hay usuarios registrados</td></tr>
                )}
            </tbody>
            </table>
        </div>
        <Modal show={showModal} onHide={handleCerrarModal}>
            <Form onSubmit={handleGuardarCambios}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {usuarioEditar && (
                <>
                    <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" value={usuarioEditar.nombre_de_usuario} onChange={(e) => setUsuarioEditar({ ...usuarioEditar, nombre_de_usuario: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" value={usuarioEditar.correo} onChange={(e) => setUsuarioEditar({ ...usuarioEditar, correo: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" value={usuarioEditar.direccion} onChange={(e) => setUsuarioEditar({ ...usuarioEditar, direccion: e.target.value })} />
                    </Form.Group>
                </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCerrarModal}>Cancelar</Button>
                <Button variant="success" type="submit">Guardar cambios</Button>
            </Modal.Footer>
            </Form>
        </Modal>
        </div>
    );
}
