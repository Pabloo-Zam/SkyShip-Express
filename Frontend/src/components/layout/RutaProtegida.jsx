import { Navigate } from "react-router-dom";

function RutaProtegida({ children, soloAdmin = false }) {
  const usuarioDemo = {
    nombre: "Cliente Demo",
    rol: "cliente",
  };

  if (!usuarioDemo) {
    return <Navigate to="/login" replace />;
  }

  if (soloAdmin && usuarioDemo.rol !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RutaProtegida;