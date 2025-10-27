import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AgregarUsuario() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const { nombre, apellido, username, correo, psw, repeatPsw, direccion } = data;

        if ((correo.match(/@/g) || []).length !== 1) {
            alert("⚠️ El correo debe contener exactamente un '@'.");
        return;
        }

        if (correo === "Administrador123@gmail.com") {
            alert("⚠️ Correo inválido, ingresa nuevamente.");
        return;
        }

        const errores = [];
        if (psw.length < 8) errores.push("tener al menos 8 caracteres");
        if (!/[A-Z]/.test(psw)) errores.push("contener al menos una letra mayúscula");
        if (!/[0-9]/.test(psw)) errores.push("contener al menos un número");

        if (errores.length > 0) {
            alert("⚠️ La contraseña debe:\n- " + errores.join("\n- "));
        return;
        }

        if (psw !== repeatPsw) {
            alert("⚠️ Las contraseñas no coinciden.");
        return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push({nombre,apellido,nombre_de_usuario: username,correo,direccion});
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        window.dispatchEvent(new Event("storage"));

        alert("✅ Usuario agregado correctamente");
        navigate("/dashboard");
    };

    return (
        <div className="agregarusuario d-flex align-items-center justify-content-center vh-100">
            <form id="agregarusu"className="w-100 p-4 rounded shadow-lg bg-white"style={{ maxWidth: "500px" }}onSubmit={handleSubmit(onSubmit)}>
                <h2 className="mb-4 text-center">Agrega los datos del usuario</h2>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Nombre del usuario</label>
                        <input type="text" className="form-control" placeholder="Nombre" {...register("nombre", { required: "El nombre es obligatorio" })}/>
                        {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Apellido del usuario</label>
                        <input type="text" className="form-control" placeholder="Apellido" {...register("apellido", { required: "El apellido es obligatorio" })} />
                        {errors.apellido && <p className="text-danger">{errors.apellido.message}</p>}
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre como usuario</label>
                    <input type="text" className="form-control" placeholder="Nombre usuario" {...register("username", { required: "El nombre de usuario es obligatorio" })} />
                    {errors.username && <p className="text-danger">{errors.username.message}</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Correo electrónico del usuario</label>
                    <input type="email" className="form-control" placeholder="Correo" {...register("correo", { required: "El correo es obligatorio" })} />
                    {errors.correo && <p className="text-danger">{errors.correo.message}</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Contraseña temporal</label>
                    <input type="password" className="form-control" placeholder="Contraseña"{...register("psw", { required: "La contraseña es obligatoria" })}/>
                    {errors.psw && <p className="text-danger">{errors.psw.message}</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Repetir Contraseña temporal</label>
                    <input type="password" className="form-control" placeholder="Repetir Contraseña" {...register("repeatPsw", { required: "Debes repetir la contraseña" })} />
                    {errors.repeatPsw && <p className="text-danger">{errors.repeatPsw.message}</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Dirección del usuario</label>
                    <input type="text" className="form-control" placeholder="Dirección" {...register("direccion", { required: "La dirección es obligatoria" })} />
                    {errors.direccion && <p className="text-danger">{errors.direccion.message}</p>}
                </div>

                <div className="d-flex gap-3">
                    <button type="button" className="btn btn-secondary w-50" onClick={() => navigate("/dashboard")}>Volver</button>
                    <button type="submit" className="btn btn-primary w-50">Agregar</button>
                </div>
            </form>
        </div>
    );
}
