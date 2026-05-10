export async function enviarContacto(datos) {
  return Promise.resolve({
    exito: true,
    mensaje: "Mensaje enviado correctamente",
    datos,
  });
}