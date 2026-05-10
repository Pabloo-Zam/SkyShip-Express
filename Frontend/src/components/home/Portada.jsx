import { Link } from "react-router-dom";

function Portada() {
  return (
    <section className="portada">
      <div className="contenedor portada-contenido">
        <h1>SkyShip Express</h1>
        <h2>Tu plataforma moderna de envíos y rastreo</h2>
        <p>
          Registra tus solicitudes, consulta tus envíos y administra información
          logística desde una sola plataforma.
        </p>

        <div className="portada-botones">
          <Link to="/registro" className="boton-principal">
            Crear cuenta
          </Link>
          <Link to="/login" className="boton-secundario">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portada;