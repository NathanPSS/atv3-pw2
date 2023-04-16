"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareStrings(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) {
            return false;
        }
        for (var j = 0; j < a[i].length; j++) {
            if (a[i][j] !== b[i][j]) {
                return false;
            }
        }
    }
    return true;
}
exports.default = compareStrings;
