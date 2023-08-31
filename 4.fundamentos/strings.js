const s = 'antonio'

// s.charAt() -> vector de 0:len(s)-1
console.log(s.charAt(0))
console.log(s.charAt(5))
console.log(s.charAt(10))

// s.charCodeAt(0) -> busca o valor do char na tabela ASCII
console.log(s.charCodeAt(0))

// Busca o index do char
console.log(s.indexOf('t'))

// Subset da string
console.log(s.substring(0, 4)) // [0; 4[ -> 0, 1, 2, 3

// concatena strings
console.log('Meu nome é '.concat(s).concat('!'))

// substituição de chars
console.log(s.replace('a', '@'))

// separa string a partir de um char
console.log('antonio,vitor,av'.split(','))



// TEMPLATE STRINGS
const nome = 'antonio'
const conc = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(conc, template)

// expressões
console.log(`1 + 1 = ${1+1}`)

// em funções:
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)