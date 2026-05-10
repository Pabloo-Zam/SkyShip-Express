export async function loginUsuario(datos) {
  return Promise.resolve({
    exito: true,
    usuario: {
      nombre: datos.correo === "admin@skyship.com" ? "Administrador" : "Cliente Demo",
      correo: datos.correo,
      rol: datos.correo === "admin@skyship.com" ? "admin" : "cliente",
    },
  });
}

export async function registrarUsuario(datos) {
  return Promise.resolve({
    exito: true,
    mensaje: "Usuario registrado correctamente",
    datos,
  });
}