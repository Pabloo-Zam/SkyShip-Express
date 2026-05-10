export async function obtenerUsuarios() {
  return Promise.resolve([
    { id: 1, nombre: "Juan Pérez", correo: "juan@mail.com", rol: "cliente" },
    { id: 2, nombre: "Ana López", correo: "ana@mail.com", rol: "cliente" },
  ]);
}

export async function obtenerResumenDashboard() {
  return Promise.resolve({
    enviosMes: 124,
    usuariosRegistrados: 58,
    regionesActivas: 7,
  });
}