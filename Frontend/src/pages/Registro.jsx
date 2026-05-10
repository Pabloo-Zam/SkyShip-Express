import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";
import FormularioRegistro from "../components/auth/FormularioRegistro";

function Registro() {
  return (
    <>
      <BarraNavegacion />
      <main className="pagina-auth">
        <div className="contenedor">
          <h1>Registro de usuario</h1>
          <FormularioRegistro />
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default Registro;