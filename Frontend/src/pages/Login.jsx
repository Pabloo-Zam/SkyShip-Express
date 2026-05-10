import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";
import FormularioLogin from "../components/auth/FormularioLogin";

function Login() {
  return (
    <>
      <BarraNavegacion />
      <main className="pagina-auth">
        <div className="contenedor">
          <h1>Iniciar sesión</h1>
          <FormularioLogin />
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default Login;