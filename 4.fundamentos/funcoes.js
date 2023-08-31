console.log('função sem retorno')
function imprimirSoma(x1, x2){
    console.log(x1 + x2)
}

imprimirSoma(2, 5)
imprimirSoma(2)
imprimirSoma(1, 2, 3, 4, 5) // soma somente os 2 primeiros



console.log('função com retorno')
function soma (a, b = 0) { // se b não for passado pra função ele recebe o valor padrão 0
    return a + b
}

console.log(soma(20, 30))
console.log(soma(20))
console.log(soma())



console.log('Armazenando uma função em uma variável')
const imprimeSoma = function(a, b){
    console.log(a + b)
}

imprimeSoma(2, 3)



console.log('Armazenando uma função arrow em uma variável')
const sum = (a, b) => {
    return a + b
}
console.log(sum(25, 17))



console.log('Função arrow com retorno implícito')
const subtracao = (a, b) => a - b // só serve para funções com 1 sentença de código
console.log(subtracao(25, 7))

const print = a => console.log(a)
print('Print >> console.log')