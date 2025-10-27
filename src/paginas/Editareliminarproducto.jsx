import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditarEliminarProducto() {
    const [productos, setProductos] = useState([]);
    const [productoEditado, setProductoEditado] = useState(null);
    const [indexEditado, setIndexEditado] = useState(null);
    const [productoEliminar, setProductoEliminar] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
        setProductos(productosGuardados);
    }, []);

    const guardarProductos = (nuevosProductos) => {
        setProductos(nuevosProductos);
        localStorage.setItem("productos", JSON.stringify(nuevosProductos));
    };

    const abrirEditar = (index) => {
        setProductoEditado({ ...productos[index] });
        setIndexEditado(index);
    };

    const guardarCambios = (e) => {
        e.preventDefault();
        const nuevos = [...productos];
        nuevos[indexEditado] = productoEditado;
        guardarProductos(nuevos);
        setProductoEditado(null);
        setIndexEditado(null);
    };

    const abrirEliminar = (index) => {
        setProductoEliminar({ ...productos[index], index });
    };

    const confirmarEliminar = () => {
        const nuevos = [...productos];
        nuevos.splice(productoEliminar.index, 1);
        guardarProductos(nuevos);
        setProductoEliminar(null);
    };

    return (
        <>
        <div className="container my-5">
            <header className="text-center py-4">
            <h1 className="display-6 fw-bold">Gestión de Productos</h1>
            <p className="lead text-muted">Aquí puedes editar o eliminar productos del catálogo</p>
            <button className="btn btn-primary mt-2" onClick={() => navigate("/dashboard")}>
                ⬅ Volver al Dashboard
            </button>
            </header>

            <h3 className="mb-4">Lista de productos</h3>
            <div className="table-responsive">
            <table className="table table-hover align-middle">
                <thead className="table-dark">
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {productos.length > 0 ? (
                    productos.map((p, index) => (
                    <tr key={index}>
                        <td>
                        <img src={p.imagen} alt={p.nombre} width="60" className="rounded" />
                        </td>
                        <td>{p.nombre}</td>
                        <td>{p.descripcion}</td>
                        <td>${p.precio}</td>
                        <td>
                        <button className="btn btn-sm btn-warning me-2" onClick={() => abrirEditar(index)}>
                            ✏️ Editar
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => abrirEliminar(index)}>
                            🗑️ Eliminar
                        </button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="5" className="text-center">
                        No hay productos registrados
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>

            {productoEditado && (
            <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={guardarCambios}>
                    <div className="modal-header bg-dark text-white">
                        <h5 className="modal-title">Editar producto</h5>
                        <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={() => setProductoEditado(null)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            value={productoEditado.nombre}
                            onChange={(e) => setProductoEditado({ ...productoEditado, nombre: e.target.value })}
                        />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <textarea
                            className="form-control"
                            value={productoEditado.descripcion}
                            onChange={(e) => setProductoEditado({ ...productoEditado, descripcion: e.target.value })}
                        ></textarea>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input
                            type="number"
                            className="form-control"
                            value={productoEditado.precio}
                            onChange={(e) => setProductoEditado({ ...productoEditado, precio: e.target.value })}
                        />
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Imagen (URL)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={productoEditado.imagen}
                            onChange={(e) => setProductoEditado({ ...productoEditado, imagen: e.target.value })}
                        />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-success">
                        Guardar cambios
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={() => setProductoEditado(null)}>
                        Cancelar
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            )}

            {productoEliminar && (
            <div className="modal fade show d-block" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-danger text-white">
                    <h5 className="modal-title">Eliminar producto</h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={() => setProductoEliminar(null)}
                    ></button>
                    </div>
                    <div className="modal-body">
                    <p>
                        ¿Estás seguro que deseas eliminar <strong>{productoEliminar.nombre}</strong>?
                    </p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={confirmarEliminar}>
                        Sí, eliminar
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => setProductoEliminar(null)}>
                        Cancelar
                    </button>
                    </div>
                </div>
                </div>
            </div>
            )}
        </div>
        </>
    );
}
