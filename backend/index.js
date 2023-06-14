const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

server.get("/hola", (request, response) => {
  const query = request.query;

  const n_de_respuesta_sumado = Number(query.numero_de_respuesta) + 50;

  response.send({
    respuesta: "Hola Elias!!!",
    numero_de_respuesta: n_de_respuesta_sumado,
  });
});

const port = 3005;

server.listen(port, () => {
  console.log("Servidor inicializado por elias");
});
