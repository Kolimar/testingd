import Navbar from "@/components/Navbar";
import { obtenerListado } from "@/services/obtenerListado";
import { useEffect, useState } from "react";

export default function ListarPeliculas() {
  const [respuesta, setRespuesta] = useState("");
  const [numeroDeRespuesta, setNumeroDeRespuesta] = useState(0);
  const [inputNumero, setInputNumero] = useState(0);

  const llamarServicio = () => {
    obtenerListado(inputNumero).then((data) => {
      setRespuesta(data.respuesta);
      setNumeroDeRespuesta(data.numero_de_respuesta);
    });
  };

  const handlerInput = (e) => {
    setInputNumero(e.target.value);
  };

  return (
    <>
      <Navbar />
      <h1 className={"titulo"}> Mi componente de listado </h1>
      <input type="number" value={inputNumero} onChange={handlerInput} />
      <button onClick={llamarServicio}>Llamar servidor</button>
      <h2>{respuesta}</h2>
      <h2>{numeroDeRespuesta}</h2>
    </>
  );
}
