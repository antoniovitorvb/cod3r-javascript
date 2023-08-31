let peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, 'is Int?', Number.isInteger(peso1))
console.log(peso2, 'is Int?', Number.isInteger(peso2))

peso1 = 1.1
console.log(peso1, 'is Int?', Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.852

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const mediaFinal = total / (peso1+peso2)

console.log(mediaFinal)
console.log('rounded:', mediaFinal.toFixed(2))

const inf = 7 / 0
console.log(inf, typeof inf)

console.log('10' / 2) // string coersed to number
console.log('show!' * 2)

let raio = 5.6
let area = Math.PI * Math.pow(raio, 2)

console.log('area =', area)
console.log('type of Math:', typeof Math)