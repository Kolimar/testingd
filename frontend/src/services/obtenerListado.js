export async function obtenerListado(numero) {
  const url = `http://localhost:3005/hola?numero_de_respuesta=${numero}`;
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    console.error(error);
  }
}
