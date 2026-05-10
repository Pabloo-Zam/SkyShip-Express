import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function BarraNavegacion() {
  const { usuario, logout } = useAuth();

  return (
    <header className="barra-navegacion">
      <div className="contenedor barra-contenido">
        <Link to="/" className="logo">
          SkyShip Express
        </Link>

        <nav className="navegacion">
          <Link to="/">Inicio</Link>

          {!usuario && <Link to="/login">Login</Link>}
          {!usuario && <Link to="/registro">Registro</Link>}

          {usuario && usuario.rol === "cliente" && (
            <>
              <Link to="/mis-envios">Mis envíos</Link>
              <Link to="/nuevo-envio">Nuevo envío</Link>
            </>
          )}

          {usuario && usuario.rol === "admin" && (
            <Link to="/admin">Panel admin</Link>
          )}

          {usuario && (
            <button className="boton-salir" onClick={logout}>
              Salir
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default BarraNavegacion;