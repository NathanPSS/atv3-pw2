"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var count = 0;
function compareStrings(a, b) {
    var newArray = [];
    if (a.length !== b.length) {
        return undefined;
    }
    do {
        if (a[count] === b[count]) {
            newArray.push(a[count]);
        }
        else {
            newArray[count] = undefined;
        }
        count++;
    } while (count < a.length || count < b.length);
    count = 0;
    return newArray;
}
exports.default = compareStrings;
