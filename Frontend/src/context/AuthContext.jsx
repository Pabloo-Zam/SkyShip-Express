import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const login = (datos) => {
    if (datos.correo === "admin@skyship.com") {
      setUsuario({
        nombre: "Administrador",
        correo: datos.correo,
        rol: "admin",
      });
    } else {
      setUsuario({
        nombre: "Cliente Demo",
        correo: datos.correo,
        rol: "cliente",
      });
    }
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}