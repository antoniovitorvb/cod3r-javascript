console.log('Executando soma() antes de declarar:', soma(3, 4))
// console.log('Executando sub() antes de declarar:', sub(3, 4))
// ReferenceError: Cannot access 'sub' before initialization

// function declaration
function soma (x, y) {
    return x + y
}

// function expression = declara uma variável que recebe uma função anônima
const sub = function (x, y) {
    return x - y
}

// named function expression (pouco usado)
const mult2 = function mult1 (x, y) {
    return x * y
} // na hora de debugar, irá aparecer o nome de 'mult1'

/**
 * function declaration Vs function expression:
 * Antes mesmo de declarar a função no código, o interpretador primeiro carrega as funções declaradas
 * e depois executa o código
 */