// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 21,
    endereco: {
        logradouro: 'rua do bobo',
        numero: 0
    }
}

// agora vamos "tirar" 'nome' e 'idade' de dentro da estrutura do objeto 'pessoa'
const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

console.log('Tirando de atributos que não existem:')
const {sobrenome, bomHumor = true} = pessoa // bomHumor recebe um valor padrão caso não exista
console.log(sobrenome, bomHumor)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

/* Não force a barra...
const { conta: {ag, num} } = pessoa 

TypeError: Cannot read properties of undefined (reading 'ag')
*/

console.log('Destruturing arrays:')
// {} -> para objetos | [] -> para arrays
const [a] = [10]
console.log(a)

const [n1, , n3, n5, n6 = 0] = [10, 7, 9, 8]
console.log('n1 =', n1, 'n3 =', n3, 'n5 =', n5, 'n6 =', n6)

const [, [, nota]] = [ [, 8, 8], [9, 6, 8] ]
console.log(nota)

console.log('Destructuring em funções:')
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log('passando obj literalmente:', rand({max: 50, min: 40}))
console.log('passando obj parcialmente:', rand({min: 900}))

const obj4 = {
    min: 40,
    max: 60
}
console.log('Passando obj declarado:', rand(obj4))



console.log('Destructuring para arrays dentro dos parâmetros da função:')
function rand2 ([min = 0, max = 1000]){
    if (min > max) {
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log( rand2([50, 40]))
console.log( rand2([992]) )
console.log( rand2([, 10]) )
console.log( rand2([]) )
/*
console.log( rand2() )

TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
*/