let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá!'
}

ola = () => 'Olá!'
ola = _ => 'Olá!' // '_' significa 1 único parâmetro

console.log(ola())

console.log('this e as arrow functions...')
function pessoa() {
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade)
    },
    1000)
}
/**
 * Aqui o contexto léxico do this é de toda a função pessoa, então mesmo dentro do escopo
 * de setInterval() o compilador sabe apontar para o this que queremos por conta da arrow function
 */
// new pessoa

let comparaComThis = function (parm) {
    console.log(this === parm)
}
console.log('\nComparando com o objeto global:')
console.log('this === global ?')
comparaComThis(global)

console.log('this === this ?')
comparaComThis(this)


console.log('\nComparando com um objeto usando bind')
const obj = {}

comparaComThis = comparaComThis.bind(obj)
console.log('this === obj ?')
comparaComThis(obj)

console.log('this === global ?')
comparaComThis(global)

console.log('this === this ?')
comparaComThis(this)

console.log('\nComparando com arrow functions:')

let comparaComThisArrow = param => console.log(this === param)

console.log('this === global ?')
comparaComThisArrow(global)

console.log('this === this ?')
comparaComThisArrow(this)

console.log('this === module.exports ?')
comparaComThisArrow(module.exports)