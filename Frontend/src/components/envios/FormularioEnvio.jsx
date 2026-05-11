import { useState } from "react";

function FormularioEnvio() {
  const [formulario, setFormulario] = useState({
    destino: "",
    descripcion: "",
    costo: "",
  });

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    alert("Envío creado de prueba");
  };

  return (
    <form className="formulario-envio" onSubmit={manejarSubmit}>
      <input type="text" name="destino" placeholder="Destino" value={formulario.destino} onChange={manejarCambio} required />
      <textarea name="descripcion" placeholder="Descripción del envío" value={formulario.descripcion} onChange={manejarCambio} required />
      <input type="number" name="costo" placeholder="Costo estimado" value={formulario.costo} onChange={manejarCambio} required />
      <button type="submit" className="boton-principal">
        Crear envío
      </button>
    </form>
  );
}

export default FormularioEnvio;