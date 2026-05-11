const enviosDemo = [
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
];

function TablaEnvios() {
  return (
    <div className="lista-envios">
      {enviosDemo.map((envio) => (
        <div className="tarjeta-envio" key={envio.codigoGuia}>
          <h3>{envio.codigoGuia}</h3>
          <p><strong>Destino:</strong> {envio.destino}</p>
          <p><strong>Fecha:</strong> {envio.fecha}</p>
          <p><strong>Estado:</strong> {envio.estado}</p>
          <p><strong>Costo:</strong> Q{envio.costo}</p>
        </div>
      ))}
    </div>
  );
}

export default TablaEnvios;