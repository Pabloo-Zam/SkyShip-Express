import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";
import FormularioEnvio from "../components/envios/FormularioEnvio";

function NuevoEnvio() {
  return (
    <>
      <BarraNavegacion />
      <main className="seccion">
        <div className="contenedor">
          <h1>Nuevo envío</h1>
          <FormularioEnvio />
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default NuevoEnvio;