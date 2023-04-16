"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function agrupa(CidadeRestaurante) {
    var obj = {};
    CidadeRestaurante.forEach(function (CidadeRestaurante) {
        var cidade = CidadeRestaurante.cidade, nome = CidadeRestaurante.nome;
        if (!obj[cidade]) {
            obj[cidade] = [nome];
        }
        else {
            obj[cidade].push(nome);
        }
    });
    return obj;
}
exports.default = agrupa;
