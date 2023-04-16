interface CidadeRestaurante {
    cidade: string;
    nome: string;
  }
  
 export default function agrupa(CidadeRestaurante: Array<CidadeRestaurante>){
    const obj: {[city: string]: string[]} = {};
    CidadeRestaurante.forEach((CidadeRestaurante) => {
      const {cidade, nome} = CidadeRestaurante;
      if (!obj[cidade]) {
        obj[cidade] = [nome];
      } else {
        obj[cidade].push(nome);
      }
    });
    return obj;
  }