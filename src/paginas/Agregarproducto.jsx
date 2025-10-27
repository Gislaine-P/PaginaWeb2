import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AgregarProducto() {
    const [nombreProducto, setNombreProducto] = useState("");
    const [descripcionProducto, setDescripcionProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [imagenProducto, setImagenProducto] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {e.preventDefault();
        const nuevoProducto = {nombre: nombreProducto,descripcion: descripcionProducto,precio: parseFloat(precioProducto).toFixed(2),imagen: imagenProducto};
        const productos = JSON.parse(localStorage.getItem("productos")) || [];
        productos.push(nuevoProducto);
        localStorage.setItem("productos", JSON.stringify(productos));
        alert("Producto agregado correctamente ✅");
        setNombreProducto("");
        setDescripcionProducto("");
        setPrecioProducto("");
        setImagenProducto("");
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 html-cuerpo regis">
            <form onSubmit={handleSubmit} id="formAgregar" className="p-4 rounded shadow bg-white" style={{ width: "380px" }}>
                <h2 className="mb-4 text-center">Agregar Nuevo Producto</h2>
                <p className="text-center mb-3">Completa los datos para añadirlo al catálogo</p>

                <div className="mb-3">
                    <label className="form-label">Nombre del producto</label>
                    <input type="text" id="nombreProducto" className="form-control"value={nombreProducto} onChange={(e) => setNombreProducto(e.target.value)}required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea id="descripcionProducto" className="form-control" value={descripcionProducto} onChange={(e) => setDescripcionProducto(e.target.value)} required></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Precio ($)</label>
                    <input type="number" id="precioProducto" className="form-control" value={precioProducto} onChange={(e) => setPrecioProducto(e.target.value)} step="0.01" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">URL de la imagen</label>
                    <input type="text" id="imagenProducto" className="form-control" value={imagenProducto} onChange={(e) => setImagenProducto(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Agregar Producto</button>
                <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => navigate("/dashboard")}>Volver</button>
            </form>
        </div>
    );
}
