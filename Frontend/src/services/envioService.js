export async function obtenerEnvios() {
  return Promise.resolve([
    {
      codigoGuia: "SKY-001",
      destino: "Guatemala",
      fecha: "2026-05-01",
      estado: "En tránsito",
      costo: 75,
    },
    {
      codigoGuia: "SKY-002",
      destino: "Quetzaltenango",
      fecha: "2026-05-03",
      estado: "Entregado",
      costo: 95,
    },
  ]);
}

export async function crearEnvio(datos) {
  return Promise.resolve({
    exito: true,
    mensaje: "Envío creado correctamente",
    datos,
  });
}