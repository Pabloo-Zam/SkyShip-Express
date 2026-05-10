function TarjetaEnvio({ envio }) {
  return (
    <div className="tarjeta-envio">
      <h3>{envio.codigoGuia}</h3>
      <p><strong>Destino:</strong> {envio.destino}</p>
      <p><strong>Fecha:</strong> {envio.fecha}</p>
      <p><strong>Estado:</strong> {envio.estado}</p>
      <p><strong>Costo:</strong> Q{envio.costo}</p>
    </div>
  );
}

export default TarjetaEnvio;