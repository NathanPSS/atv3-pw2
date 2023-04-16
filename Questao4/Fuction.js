"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareMatriz(a, b) {
    if (a.length !== b.length) {
        return undefined;
    }
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) {
            return undefined;
        }
        var subResult = [];
        for (var j = 0; j < a[i].length; j++) {
            if (a[i][j] === b[i][j]) {
                subResult.push(a[i][j]);
            }
            else {
                subResult.push(undefined);
            }
        }
        result.push.apply(result, subResult);
    }
    return result;
}
exports.default = compareMatriz;
/*

["maca","banana","mamao"]
["maca","caju","limao"]

["maca","banana","mamao"]
["maca","banana","limao"]
*/ 
