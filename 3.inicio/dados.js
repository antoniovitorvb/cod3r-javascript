/*
* ESCOPO: var tem escopo de função, enquanto let tem escopo de bloco.
Isso significa que uma variável declarada com var é acessível em toda a função 
em que ela é declarada, enquanto uma variável declarada com let é apenas acessível
dentro do bloco de código em que ela é declarada.

* HOISTING: var é hoisted, o que significa que ele é movido para o topo da função em que é 
declarado antes de ser executado. Isso significa que você pode acessar uma variável declarada
com var antes que ela seja realmente declarada, mas isso pode levar a bugs se você não estiver
ciente disso. let não é hoisted, então você só pode acessar uma variável declarada com let
depois que ela foi declarada.

* REDEFINIÇÃO: var permite que você redefina uma variável, enquanto let não.
Isso significa que você pode declarar uma variável com var e depois atribuir um novo valor
a ela mais tarde na função, enquanto você não pode fazer isso com let:
let x = 3
...
let x = 5 -> isso gerará um bug
*/

var x = 10
let y = 5.5

console.log('X =', x)

console.log('X + Y =', x + y)

y = 10
console.log('X + Y =', x + y)

let nome = 'John'

console.log('Nome: ' + nome)

let b = true
console.log('this is a boolean: ', b, !b)

console.log(typeof x)
console.log(typeof y)
console.log(typeof nome)
console.log(typeof b)