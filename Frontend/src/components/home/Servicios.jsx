function Servicios() {
  return (
    <section className="seccion">
      <div className="contenedor">
        <h2>Servicios</h2>
        <p className="texto-seccion">
          SkyShip Express ofrece soluciones digitales y logísticas para una
          mejor gestión de envíos.
        </p>

        <div className="grid-servicios">
          <div className="tarjeta-servicio">
            <h3>Gestión de envíos</h3>
            <p>Registra y visualiza tus solicitudes de envío desde tu cuenta.</p>
          </div>

          <div className="tarjeta-servicio">
            <h3>Rastreo de paquetes</h3>
            <p>Consulta el estado actual de tus envíos de forma clara.</p>
          </div>

          <div className="tarjeta-servicio">
            <h3>Atención al cliente</h3>
            <p>Envía consultas mediante el formulario de contacto.</p>
          </div>

          <div className="tarjeta-servicio">
            <h3>Panel administrativo</h3>
            <p>Administración de usuarios, envíos y métricas relevantes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;