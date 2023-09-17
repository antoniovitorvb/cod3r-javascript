/* HOISTING: quando uma 'var' é declarada, o compilador iça (hoists) ela para o início do código.
Assim, ela é declarada em todo o escopo, mas nenhum valor é atribuido, por isso o 'undefined'
*/
console.log('var a antes =', a) // = undefined
var a = 2
console.log('var a depois =', a)

// console.log('let b antes =', b) // ReferenceError: Cannot access 'b' before initialization
let b = 2
console.log('let b depois =', b)