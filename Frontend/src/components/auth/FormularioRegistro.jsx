import { useState } from "react";

function FormularioRegistro() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
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
    alert("Registro simulado. Luego se conectará al backend.");
  };

  return (
    <form className="formulario-auth" onSubmit={manejarSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre completo"
        value={formulario.nombre}
        onChange={manejarCambio}
        required
      />

      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={formulario.correo}
        onChange={manejarCambio}
        required
      />

      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        value={formulario.telefono}
        onChange={manejarCambio}
        required
      />

      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={formulario.direccion}
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
        Registrarse
      </button>
    </form>
  );
}

export default FormularioRegistro;