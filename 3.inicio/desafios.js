// DESAFIO 1: área do círculo

const pi = 3.141592

// a = 10 -> não é possível

let r = 10
let areaCirc

areaCirc = pi * r ** 2
console.log('area =', areaCirc, 'm2')

console.log('valor oficial de pi =', Math.PI)

// DESAFIO 2: troca de valores
var a = 7
var b = 3

console.log('a =', a)
console.log('b =', b)

var aux = a
a = b
b = aux
console.log('novo a =', a)
console.log('novo b =', b)

// alternativa
var [a, b] = []

[a, b] = [b, a]
console.log('novo a =', a)
console.log('novo b =', b)