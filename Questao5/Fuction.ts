interface Cidade {
   alcunha: string,
   coordenadas: {
    latitude: Array<number>,
    longitude: Array<number>
   }
   nome: string
}


export default function descreveCidade(cidade :Cidade) {
    const { nome } = cidade;
    const estado = "Paraíba"; // hardcoded for example purposes
    const { latitude, longitude } = cidade.coordenadas;
    const lat = `${latitude[0]}° ${latitude[1]}' ${latitude[2]}" ${latitude[0] >= 0 ? 'N' : 'S'}`;
    const long = `${longitude[0]}° ${longitude[1]}' ${longitude[2]}" ${longitude[0] >= 0 ? 'E' : 'W'}`;
    const localizacao = `Localizada em ${lat} ${long}`;
    const alcunha = cidade.alcunha;
    
    return `${nome}, ${estado}\n${alcunha}\n${localizacao}`;
}

