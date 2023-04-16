import compareMatriz from "./Fuction"

let a = ["maca","banana","mamao"]

let b = ["maca","caju","limao"]

let aa = [a,b]

let c = ["maca","banana","limao"]

let cc = [a,c]

console.log("2 matrizes iguais")
console.log(compareMatriz(aa,aa))

console.log("2 matrizes diferentes")
console.log(compareMatriz(aa,cc))
