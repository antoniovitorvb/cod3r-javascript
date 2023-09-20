console.log('while:')
let count = 1

while (count <= 5) {
    console.log(count)
    count++
}

console.log('\nFor:')
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

console.log('\nFor array:')
const notas = [6.7, 7, 8.2, 9, 4.3]
for (let i = 0; i < notas.length; i++) {
    console.log(i, 'nota:', notas[i])
}

console.log('\nFor IN:')
for (let i in notas) {
    console.log(i, 'nota:', notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 58
}

console.log('\nFor IN object:')
for (let att in pessoa) {
    console.log(att, ':', pessoa[att])
}