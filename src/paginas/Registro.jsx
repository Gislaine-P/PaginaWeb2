import { useForm } from "react-hook-form"; 
import { useNavigate } from "react-router-dom";

export function Registro() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navegador = useNavigate();

  const onSubmit = (data) => {
    if (data.contraseña !== data.repetirContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const nuevoUsuario = {
      nombre: data.nombre,
      apellido: data.apellido,
      nombre_de_usuario: data.username,
      correo: data.correo,
      contrasena: data.contraseña,
      direccion: data.direccion,
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    navegador("/login");
  };

  return (
    <>
      <form id="registro" onSubmit={handleSubmit(onSubmit)}>
        <h2>Registra tus datos</h2>
        <div>
          <div>
            <label>Tu nombre</label>
            <input {...register("nombre", { required: "El nombre es obligatorio" })} type="text" placeholder="Nombre" />
            {errors.nombre && <p style={{ color: "red" }}>{errors.nombre.message}</p>}
          </div>
          <div>
            <label>Tu apellido</label>
            <input {...register("apellido", { required: "El apellido es obligatorio" })} type="text" placeholder="Apellido" />
            {errors.apellido && <p style={{ color: "red" }}>{errors.apellido.message}</p>}
          </div>
        </div>
        <div>
          <label>Nombre de usuario</label>
          <input {...register("username", { required: "El nombre de usuario es obligatorio" })} type="text" placeholder="Nombre usuario" />
          {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
        </div>
        <div>
          <label>Tu correo</label>
          <input {...register("correo", { 
            required: "El correo es obligatorio", 
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Correo inválido"
            }
          })} type="text" placeholder="Correo" />
          {errors.correo && <p style={{ color: "red" }}>{errors.correo.message}</p>}
        </div>
        <div>
          <label>Contraseña</label>
          <input {...register("contraseña", { required: "La contraseña es obligatoria" })} type="password" placeholder="Contraseña" />
          {errors.contraseña && <p style={{ color: "red" }}>{errors.contraseña.message}</p>}
        </div>
        <div>
          <label>Repetir Contraseña</label>
          <input {...register("repetirContraseña", { required: "La repetición de la contraseña es obligatoria" })} type="password" placeholder="Repetir Contraseña" />
          {errors.repetirContraseña && <p style={{ color: "red" }}>{errors.repetirContraseña.message}</p>}
        </div>
        <div>
          <label>Dirección</label>
          <input {...register("direccion", { required: "La dirección es obligatoria" })} type="text" placeholder="Dirección" />
          {errors.direccion && <p style={{ color: "red" }}>{errors.direccion.message}</p>}
        </div>
        <button id="btn1" type="submit">Registrarse</button>
        <button id="btn2" type="button" onClick={() => navegador("/login")}>Volver al Login</button>
      </form>
    </>
  );
}
