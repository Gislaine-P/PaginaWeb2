import { useForm } from "react-hook-form"; 
import { Route, useNavigate } from "react-router-dom"

export function Registro() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navegador =useNavigate()
  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
  };

  return (
    <>
      <form id="registro"onSubmit={handleSubmit(onSubmit)}>
        <h2>Registra tus datos</h2>
        <div>
          <div>
            <label>Tu nombre</label>
            <input{...register("nombre", { required: "El nombre es obligatorio" })}type="text"placeholder="Nombre"/>{errors.nombre && <p style={{ color: "red" }}>{errors.nombre.message}</p>}
          </div>
          <div>
            <label>Tu apellido</label>
            <input{...register("apellido", { required: "El apellido es obligatorio" })}type="text"placeholder="Apellido"/>{errors.apellido && <p style={{ color: "red" }}>{errors.apellido.message}</p>}
          </div>
        </div>
         <div>
          <label>Nombre de usuario</label>
          <input{...register("username", { required: "El nombre usuario es obligatorio" })}type="text"placeholder="Nombre usuario"/>{errors.contraseña && <p style={{ color: "red" }}>{errors.username.message}</p>}
        </div>
         <div>
          <label>Tu Correo</label>
          <input{...register("correo", { required: "El correo es obligatorio" })}type="text"placeholder="Apellido"/>{errors.apellido && <p style={{ color: "red" }}>{errors.apellido.message}</p>}
        </div>
        <div>
          <label>Contraseña</label>
          <input{...register("contraseña", { required: "La contraseña es obligatoria" })}type="text"placeholder="Contraseña"/>{errors.contraseña && <p style={{ color: "red" }}>{errors.contraseña.message}</p>}
        </div>
        <div>
          <label> Repetir Contraseña</label>
          <input{...register("repetirContraseña", { required: "La repetición de la contraseña es obligatoria" })}type="text"placeholder="Repetir Contraseña"/>{errors.repetirContraseña && <p style={{ color: "red" }}>{errors.repetirContraseña.message}</p>}
        </div>
        <div>
          <label>Direccion</label>
          <input{...register("direccion", { required: "La dirección es obligatoria" })}type="text"placeholder="Direccion"/>{errors.direccion && <p style={{ color: "red" }}>{errors.direccion.message}</p>}
        </div>
        <button id="btn1" type="submit">Registrarse</button>
        <button id="btn2"onClick={()=> navegador("/")}>Volver al Login</button>
      </form>
    </>
  );
}


    