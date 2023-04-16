import descreveCidade from "./Fuction";

const cidade = {
    alcunha: "A terra que ensinou a Paraíba a ler.",
    coordenadas: {
      latitude: [6, 53, 24],
      longitude: [38, 33, 43],
    },
    nome: "Cajazeiras",
  };
  console.log(descreveCidade(cidade))