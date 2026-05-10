import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";
import Portada from "../components/home/Portada";
import Servicios from "../components/home/Servicios";
import Nosotros from "../components/home/Nosotros";
import PreguntasFrecuentes from "../components/home/PreguntasFrecuentes";
import Contacto from "../components/home/Contacto";

function Inicio() {
  return (
    <>
      <BarraNavegacion />
      <Portada />
      <Servicios />
      <Nosotros />
      <PreguntasFrecuentes />
      <Contacto />
      <PiePagina />
    </>
  );
}

export default Inicio;