/** Existem diversas formas de se chamar uma função
 * Uma das principais diferenças de chamar uma função com Call ou Apply é através dos parâmetros
*/ 

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * ( 1+ imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 3000,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // R$ NaN

global.preco = 20
global.desc = 0.1
console.log('\nUsando global:')
console.log(getPreco())

console.log('\nUsando o objeto produto')
console.log(produto.getPreco())

// ==========
console.log('\nUsando Call:')

const carro = {
    preco: 60000,
    desc:0.2
}
console.log(getPreco.call(carro))

/**
 * Sempre se passa primeiro o contexto (objeto) para o call
 * e só depois os parâmetros para a função getPreco()
 */ 
console.log(getPreco.call(carro, 0.1, '$'))
console.log(getPreco.call(global, 0.25, '$'))

console.log('\nUsando Apply:')
console.log(getPreco.apply(carro))

/**
 * Diferente do call, no apply ao invés de colocar todos os parâmetros diretamente nele,
 * eu vou passar os parâmetro da função num array
 */
console.log(getPreco.apply(carro, [0.1, '€']))
console.log(getPreco.apply(global, [0.1, '€']))