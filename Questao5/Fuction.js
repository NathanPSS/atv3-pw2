"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function descreveCidade(cidade) {
    var nome = cidade.nome;
    var estado = "Paraíba"; // hardcoded for example purposes
    var _a = cidade.coordenadas, latitude = _a.latitude, longitude = _a.longitude;
    var lat = "".concat(latitude[0], "\u00B0 ").concat(latitude[1], "' ").concat(latitude[2], "\" ").concat(latitude[0] >= 0 ? 'N' : 'S');
    var long = "".concat(longitude[0], "\u00B0 ").concat(longitude[1], "' ").concat(longitude[2], "\" ").concat(longitude[0] >= 0 ? 'E' : 'W');
    var localizacao = "Localizada em ".concat(lat, " ").concat(long);
    var alcunha = cidade.alcunha;
    return "".concat(nome, ", ").concat(estado, "\n").concat(alcunha, "\n").concat(localizacao);
}
exports.default = descreveCidade;
