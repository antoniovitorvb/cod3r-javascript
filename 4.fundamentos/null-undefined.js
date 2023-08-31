// ATRIBUIÇÕES POR VALOR E POR REFERÊNCIA

const a = {
    nome: 'Antonio'
}
console.log('a antes', a)

const b = a // essa é uma atribuição por referência. a e b apontam para o mesmo lugar da memória
b.nome = 'Vitor'
console.log('b', b)
console.log('a depois', a)

// como no python, df2 = df1. Para alterar df2 independentemente seria df2 = df1.copy()

/* OBS.: isto só vale para tipos mais complexos (object).
NÂO VALE em tipos primitivos (number, string, etc).
*/
let c = 3
console.log('c antes', c)

let d = c
d++ // incrementa em 1
console.log('d', d)
console.log('c depois', c)

/*
UNDEFINED = foi declarado, mas não teve um valor atribuido
IS NOT DEFINED = nem foi declarada
NULL = aponta para nenhum endereço de memória (ausência de valor)
*/
let valor
console.log(valor)
// console.log(valor2) // ReferenceError: valor2 is not defined

valor = null
console.log(valor)
/* null é geralmente usado quando quiser que uma variável já existente, que aponta para um 
endereço de memória, não aponte mais pra lugar algum */

// console.log(valor.toString()) // TypeError: Cannot read properties of null (reading 'toString')

const produto = {}
console.log(produto) // {}
console.log(produto.preco) // undefined
// console.log(produto.preco.a) // TypeError: Cannot read properties of undefined (reading 'a')

produto.preco = 3.50
console.log(produto)
console.log(produto.preco.a) // já que agora preco existe, preco.a = undefined


// EXEMPLO: um produto do site está sem estoque:
produto.preco = 0 // o produto vai estar de graça!
produto.preco = null // a melhor forma de estar sem estoque (sem preço)