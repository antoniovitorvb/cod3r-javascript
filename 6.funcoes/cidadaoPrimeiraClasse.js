// Função em JS é First Class Object (citizen)
// Hieher order function

// Criando de forma literal
function fun1() {
    // caso o return não seja explicito, uma função retornará 'Undefined'
}

// Armazenando em uma variável:
const fun2 = function() {
    // criasse uma função anônima (como se fosse um lambda) e atribue o nome da var
}

console.log('\nArmazenando em um array:')
const array = [function(a, b) {return a+b}, fun1, fun2]
console.log(array[0](2, 3))

console.log('\nArmazenando em um atributo de objeto:')
const obj = {}
obj.fun3 = function(){
    return 'Olá!'
}
console.log(obj)
console.log(obj.fun3())

console.log('\nPassar função como parâmetro:')
const run = function(array, fun) {
    console.log('executando...')
    console.log(fun(array))
}

const arraySum = function(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++ ) {
        sum += array[i];
    }
    return sum
}
const arrayMulti = function(array) {
    let prod = 1

    for (let i = 0; i < array.length; i++) {
        prod *= array[i]
    }
    return prod
}

let array1 = [1, 3, 5, 7, 9]

run(array1, arraySum)
run(array1, arrayMulti)

console.log('\nFunção que retorna/contem função:')
function somaEmultiplica(a, b) {
    return function(c) {
        console.log((a + b) * c)
    }
}

somaEmultiplica(5, 6)(2)

const multiplosCinco = somaEmultiplica(2, 3)
console.log(multiplosCinco)

multiplosCinco(3)