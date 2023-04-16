"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var count = 0;
function compareStrings(a, b) {
    do {
        if (a[count] !== b[count]) {
            return false;
        }
        count++;
    } while (count < a.length);
    return true;
}
exports.default = compareStrings;
