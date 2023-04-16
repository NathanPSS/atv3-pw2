import compareMatriz from "./Fuction"

let a = ["maca","banana","mamao"]

let b = ["maca","caju","limao"]

let c = ["maca","banana","limao"]

let d = ["pera","uva","limao"]

let aa = [a,b]

let cc = [c,d]

console.log(compareMatriz(aa,cc))

/*

["maca","banana","mamao"]
["maca","caju","limao"]

["maca","banana","mamao"]
["pera","uva","limao"]
*/