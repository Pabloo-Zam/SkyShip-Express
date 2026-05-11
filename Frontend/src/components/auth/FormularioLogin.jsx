import { useState } from "react";

function FormularioLogin() {
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
    alert("Login de prueba funcionando");
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