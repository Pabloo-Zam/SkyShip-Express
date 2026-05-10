import { Link } from "react-router-dom";
import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";

function NoEncontrado() {
  return (
    <>
      <BarraNavegacion />
      <main className="seccion">
        <div className="contenedor">
          <h1>Página no encontrada</h1>
          <p>La ruta que intentaste abrir no existe.</p>
          <Link to="/" className="boton-principal">
            Volver al inicio
          </Link>
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default NoEncontrado;