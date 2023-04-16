"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fuction_1 = require("./Fuction");
var a = ["maca", "banana", "mamao"];
var b = ["maca", "caju", "limao"];
var c = ["maca", "banana", "limao"];
var d = ["pera", "uva", "limao"];
var aa = [a, b];
var cc = [c, d];
console.log((0, Fuction_1.default)(aa, cc));
/*

["maca","banana","mamao"]
["maca","caju","limao"]

["maca","banana","mamao"]
["maca","banana","limao"]
*/ 
