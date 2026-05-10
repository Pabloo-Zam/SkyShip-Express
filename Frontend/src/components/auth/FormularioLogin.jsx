import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function FormularioLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formulario, setFormulario] = useState({
    correo: "",
    password: "",
  });

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    login(formulario);

    if (formulario.correo === "admin@skyship.com") {
      navigate("/admin");
    } else {
      navigate("/mis-envios");
    }
  };

  return (
    <form className="formulario-auth" onSubmit={manejarSubmit}>
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={formulario.correo}
        onChange={manejarCambio}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formulario.password}
        onChange={manejarCambio}
        required
      />

      <button type="submit" className="boton-principal">
        Iniciar sesión
      </button>
    </form>
  );
}

export default FormularioLogin;