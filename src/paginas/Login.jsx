import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function Login() {
  const navegador = useNavigate();
  const { login } = useContext(LoginContext); 
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const moca = "https://demo6010908.mockable.io/usuarios";

  const validar = (e) => {
    e.preventDefault();

    fetch(moca)
      .then((response) => {
        if (!response.ok) throw new Error("Error de red");
        return response.json();
      })
      .then((usuariosData) => {
        const buscado = usuariosData.find(
          (user) =>
            user.nombre_de_usuario === usuario &&
            user.contrasena === contraseña
        );

        if (buscado) {
          login(buscado); // guarda todo el usuario

          if (
            buscado.nombre_de_usuario === "administrador" &&
            buscado.contrasena === contraseña
          ) {
            navegador("/dashboard");
          } else {
            navegador("/perfil");
          }
        } else {
          alert("Usuario o contraseña incorrectos.");
        }
      })
      .catch((error) => {
        console.error("Hubo un error en el fetch:", error);
        alert("Ocurrió un error al intentar iniciar sesión.");
      });
  };

  return (
    <>
      <form id="login" onSubmit={validar}>
        <h2>¡Iniciar Sesión!</h2>
        <div>
          <label>Usuario</label>
          <input
            type="text"
            placeholder="Ingrese su usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Inicia sesión
        </button>

        <p id="registro" className="mt-3 text-center">
          ¿No tienes cuenta?{" "}
          <a onClick={() => navegador("/registro")}>Regístrate aquí</a>
        </p>
      </form>
    </>
  );
}

export default Login;
