import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";
import ResumenDashboard from "../components/admin/ResumenDashboard";
import TablaUsuarios from "../components/admin/TablaUsuarios";
import TablaEnviosAdmin from "../components/admin/TablaEnviosAdmin";
import FormularioEditarUsuario from "../components/admin/FormularioEditarUsuario";
import FormularioEditarEnvio from "../components/admin/FormularioEditarEnvio";

function DashboardAdmin() {
  return (
    <>
      <BarraNavegacion />
      <main className="seccion">
        <div className="contenedor">
          <h1>Panel administrativo</h1>
          <ResumenDashboard />
          <TablaUsuarios />
          <TablaEnviosAdmin />
          <div className="grid-admin-formularios">
            <FormularioEditarUsuario />
            <FormularioEditarEnvio />
          </div>
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default DashboardAdmin;