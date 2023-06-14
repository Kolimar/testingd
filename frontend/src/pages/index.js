import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  const route = useRouter();

  const handleRedirect = () => {
    // aca vamos a redirigir
    route.push("/listarpeliculas");
  };

  return (
    <div>
      <Navbar />
      <h1> Hola Elias </h1>
      <button onClick={handleRedirect}> Clickeame! </button>
    </div>
  );
}
