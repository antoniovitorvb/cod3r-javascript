{
    {
        var sera = 'será?'
        console.log(sera)
    }
}
console.log(sera)
// O escopo de declarar com 'var' permite que a variável seja lida de qualquer bloco [HOISTED]

function teste() {
    var local = 123
    console.log('function teste:', local)
}
teste()
// console.log(local) // ReferenceError: local is not defined
/* functions têm escopo bem isolado, portanto, mesmo declarando com 'var' ela fica
inacessível fora da função */

var num = 1
{
    var num = 2
    console.log('var dentro =', num)
}
console.log('var fora =', num)


// 'let' tem escopo de bloco, portanto, suas variáveis ficam inacessíveis fora do bloco em que foi declarada
let numero = 1
{
    let numero = 2
    console.log('let dentro =', numero)
}
console.log('let fora =', numero)