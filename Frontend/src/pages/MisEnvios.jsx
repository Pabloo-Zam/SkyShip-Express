import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";
import TablaEnvios from "../components/envios/TablaEnvios";

function MisEnvios() {
  return (
    <>
      <BarraNavegacion />
      <main className="seccion">
        <div className="contenedor">
          <h1>Mis envíos</h1>
          <TablaEnvios />
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default MisEnvios;