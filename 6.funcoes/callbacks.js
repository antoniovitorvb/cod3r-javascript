// ===== CALLBACKS 1 =====
const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Lexus']

console.log('\nDeclarando a função antes do callback:')
function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
/** CALLBACKS
 * É passar uma função para uma outra função e quando determinado evento acontecer
 * a função passada é disparada/chamada de volta quantas vezes for
 */

fabricantes.forEach(imprimir)
/**
 * Para cada elemento dentro de 'fabricantes',
 * o forEach vai chamar de volta (callback) a função imprimir
 */

console.log('\nCallback com função anônima:')
fabricantes.forEach(
    function (a) {
        console.log(a) // 'a' itera para cada elemento de 'fabricantes'
    }
)

console.log('\nUsando arrow function:')
fabricantes.forEach(
    fabricante => console.log(fabricante)
)



// ===== CALLBACKS 2 =====
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

console.log('\nComo extrair somente as notas baixas (abaixo de 7)')
console.log('Sem callback:')

let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) // append
    }
}
console.log(notasBaixas1)

console.log('Com callback:')
const notasBaixas2 = notas.filter(
    function (nota) {
        return nota < 7
    }
)
/**
 * .filter() é uma função callback que retorna True ou False para cada elemento
 * Obs.: filter() não altera o array notas inicial
 */
console.log(notasBaixas2)

console.log('Com callback com arrow function:')
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)



// ===== CALLBACKS 3 =====
// exemplo de callback no browser

// document.getElementsByTagName('body')[0].onclick = function (e) {
//     console.log('O event ocorreu!')
// }