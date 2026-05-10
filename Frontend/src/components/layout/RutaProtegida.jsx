import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RutaProtegida({ children, soloAdmin = false }) {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  if (soloAdmin && usuario.rol !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RutaProtegida;