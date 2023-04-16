import compareStrings from "./Fuction"

let a = ["maca","banana","mamao"]

let b = ["maca","caju","limao"]

let c = ["maca","banana"]


console.log("2 strings com elementos diferentes")
console.log(compareStrings(a,b))


console.log("2 strings com elementos iguais")
console.log(compareStrings(b,b))

console.log("2 strings com tamanho diferente")
console.log(compareStrings(a,c))

