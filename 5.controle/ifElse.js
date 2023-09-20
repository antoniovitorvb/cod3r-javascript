const printResult = function (nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}!`)
    } else {
        console.log(`Reprovado com ${nota}!`)
    }
}
printResult(6.5)
printResult(7.2)

printResult('opa')

console.log('\nif else if')

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Aprovado summa cum laude!!')
    } else if (nota.entre(7, 8.99)) {
        console.log(`Aprovado com ${nota}!`)
    } else if (nota.entre(0, 6.99)) {
        console.log(`Reprovado com ${nota}!`)
    } else {
        console.log('Nota inválida')
    }

    console.log('Fim!')
}

imprimirResultado(9.5)
imprimirResultado(7.2)
imprimirResultado(5.6)
imprimirResultado(-1)
imprimirResultado(11)
// imprimirResultado('a') // TypeError: nota.entre is not a function
// imprimirResultado() // TypeError: Cannot read properties of undefined (reading 'entre')