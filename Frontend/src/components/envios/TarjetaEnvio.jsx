import TarjetaEnvio from "./TarjetaEnvio";

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
        <TarjetaEnvio key={envio.codigoGuia} envio={envio} />
      ))}
    </div>
  );
}

export default TablaEnvios;