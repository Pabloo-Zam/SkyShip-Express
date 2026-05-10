function PreguntasFrecuentes() {
  return (
    <section className="seccion">
      <div className="contenedor">
        <h2>Preguntas frecuentes</h2>

        <div className="tarjeta-detalle">
          <h3>¿Necesito una cuenta para registrar envíos?</h3>
          <p>Sí, debes iniciar sesión para gestionar tus envíos.</p>
        </div>

        <div className="tarjeta-detalle">
          <h3>¿Puedo consultar el estado de mis paquetes?</h3>
          <p>Sí, cada usuario puede visualizar el estado de sus envíos.</p>
        </div>

        <div className="tarjeta-detalle">
          <h3>¿Existe un administrador del sistema?</h3>
          <p>Sí, el sistema contempla un rol administrador para gestión interna.</p>
        </div>
      </div>
    </section>
  );
}

export default PreguntasFrecuentes;